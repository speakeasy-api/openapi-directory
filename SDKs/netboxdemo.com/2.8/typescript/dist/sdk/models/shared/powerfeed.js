"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PowerFeed = exports.PowerFeedType = exports.PowerFeedTypeValueEnum = exports.PowerFeedTypeLabelEnum = exports.PowerFeedSupply = exports.PowerFeedSupplyValueEnum = exports.PowerFeedSupplyLabelEnum = exports.PowerFeedStatus = exports.PowerFeedStatusValueEnum = exports.PowerFeedStatusLabelEnum = exports.PowerFeedPhase = exports.PowerFeedPhaseValueEnum = exports.PowerFeedPhaseLabelEnum = void 0;
var utils_1 = require("../../../internal/utils");
var nestedpowerpanel_1 = require("./nestedpowerpanel");
var nestedrack_1 = require("./nestedrack");
var PowerFeedPhaseLabelEnum;
(function (PowerFeedPhaseLabelEnum) {
    PowerFeedPhaseLabelEnum["SinglePhase"] = "Single phase";
    PowerFeedPhaseLabelEnum["ThreePhase"] = "Three-phase";
})(PowerFeedPhaseLabelEnum = exports.PowerFeedPhaseLabelEnum || (exports.PowerFeedPhaseLabelEnum = {}));
var PowerFeedPhaseValueEnum;
(function (PowerFeedPhaseValueEnum) {
    PowerFeedPhaseValueEnum["SinglePhase"] = "single-phase";
    PowerFeedPhaseValueEnum["ThreePhase"] = "three-phase";
})(PowerFeedPhaseValueEnum = exports.PowerFeedPhaseValueEnum || (exports.PowerFeedPhaseValueEnum = {}));
var PowerFeedPhase = /** @class */ (function (_super) {
    __extends(PowerFeedPhase, _super);
    function PowerFeedPhase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], PowerFeedPhase.prototype, "label", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], PowerFeedPhase.prototype, "value", void 0);
    return PowerFeedPhase;
}(utils_1.SpeakeasyBase));
exports.PowerFeedPhase = PowerFeedPhase;
var PowerFeedStatusLabelEnum;
(function (PowerFeedStatusLabelEnum) {
    PowerFeedStatusLabelEnum["Offline"] = "Offline";
    PowerFeedStatusLabelEnum["Active"] = "Active";
    PowerFeedStatusLabelEnum["Planned"] = "Planned";
    PowerFeedStatusLabelEnum["Failed"] = "Failed";
})(PowerFeedStatusLabelEnum = exports.PowerFeedStatusLabelEnum || (exports.PowerFeedStatusLabelEnum = {}));
var PowerFeedStatusValueEnum;
(function (PowerFeedStatusValueEnum) {
    PowerFeedStatusValueEnum["Offline"] = "offline";
    PowerFeedStatusValueEnum["Active"] = "active";
    PowerFeedStatusValueEnum["Planned"] = "planned";
    PowerFeedStatusValueEnum["Failed"] = "failed";
})(PowerFeedStatusValueEnum = exports.PowerFeedStatusValueEnum || (exports.PowerFeedStatusValueEnum = {}));
var PowerFeedStatus = /** @class */ (function (_super) {
    __extends(PowerFeedStatus, _super);
    function PowerFeedStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], PowerFeedStatus.prototype, "label", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], PowerFeedStatus.prototype, "value", void 0);
    return PowerFeedStatus;
}(utils_1.SpeakeasyBase));
exports.PowerFeedStatus = PowerFeedStatus;
var PowerFeedSupplyLabelEnum;
(function (PowerFeedSupplyLabelEnum) {
    PowerFeedSupplyLabelEnum["Ac"] = "AC";
    PowerFeedSupplyLabelEnum["Dc"] = "DC";
})(PowerFeedSupplyLabelEnum = exports.PowerFeedSupplyLabelEnum || (exports.PowerFeedSupplyLabelEnum = {}));
var PowerFeedSupplyValueEnum;
(function (PowerFeedSupplyValueEnum) {
    PowerFeedSupplyValueEnum["Ac"] = "ac";
    PowerFeedSupplyValueEnum["Dc"] = "dc";
})(PowerFeedSupplyValueEnum = exports.PowerFeedSupplyValueEnum || (exports.PowerFeedSupplyValueEnum = {}));
var PowerFeedSupply = /** @class */ (function (_super) {
    __extends(PowerFeedSupply, _super);
    function PowerFeedSupply() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], PowerFeedSupply.prototype, "label", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], PowerFeedSupply.prototype, "value", void 0);
    return PowerFeedSupply;
}(utils_1.SpeakeasyBase));
exports.PowerFeedSupply = PowerFeedSupply;
var PowerFeedTypeLabelEnum;
(function (PowerFeedTypeLabelEnum) {
    PowerFeedTypeLabelEnum["Primary"] = "Primary";
    PowerFeedTypeLabelEnum["Redundant"] = "Redundant";
})(PowerFeedTypeLabelEnum = exports.PowerFeedTypeLabelEnum || (exports.PowerFeedTypeLabelEnum = {}));
var PowerFeedTypeValueEnum;
(function (PowerFeedTypeValueEnum) {
    PowerFeedTypeValueEnum["Primary"] = "primary";
    PowerFeedTypeValueEnum["Redundant"] = "redundant";
})(PowerFeedTypeValueEnum = exports.PowerFeedTypeValueEnum || (exports.PowerFeedTypeValueEnum = {}));
var PowerFeedType = /** @class */ (function (_super) {
    __extends(PowerFeedType, _super);
    function PowerFeedType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], PowerFeedType.prototype, "label", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], PowerFeedType.prototype, "value", void 0);
    return PowerFeedType;
}(utils_1.SpeakeasyBase));
exports.PowerFeedType = PowerFeedType;
var PowerFeed = /** @class */ (function (_super) {
    __extends(PowerFeed, _super);
    function PowerFeed() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=amperage" }),
        __metadata("design:type", Number)
    ], PowerFeed.prototype, "amperage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=comments" }),
        __metadata("design:type", String)
    ], PowerFeed.prototype, "comments", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created" }),
        __metadata("design:type", Date)
    ], PowerFeed.prototype, "created", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=custom_fields" }),
        __metadata("design:type", Object)
    ], PowerFeed.prototype, "customFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PowerFeed.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last_updated" }),
        __metadata("design:type", Date)
    ], PowerFeed.prototype, "lastUpdated", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=max_utilization" }),
        __metadata("design:type", Number)
    ], PowerFeed.prototype, "maxUtilization", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PowerFeed.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=phase" }),
        __metadata("design:type", PowerFeedPhase)
    ], PowerFeed.prototype, "phase", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=power_panel" }),
        __metadata("design:type", nestedpowerpanel_1.NestedPowerPanel)
    ], PowerFeed.prototype, "powerPanel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rack" }),
        __metadata("design:type", nestedrack_1.NestedRack)
    ], PowerFeed.prototype, "rack", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", PowerFeedStatus)
    ], PowerFeed.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=supply" }),
        __metadata("design:type", PowerFeedSupply)
    ], PowerFeed.prototype, "supply", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], PowerFeed.prototype, "tags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", PowerFeedType)
    ], PowerFeed.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=voltage" }),
        __metadata("design:type", Number)
    ], PowerFeed.prototype, "voltage", void 0);
    return PowerFeed;
}(utils_1.SpeakeasyBase));
exports.PowerFeed = PowerFeed;
