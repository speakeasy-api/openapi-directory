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
exports.GoogleCloudPolicysimulatorV1ReplayResult = void 0;
var utils_1 = require("../../../internal/utils");
var googlecloudpolicysimulatorv1accesstuple_1 = require("./googlecloudpolicysimulatorv1accesstuple");
var googlecloudpolicysimulatorv1replaydiff_1 = require("./googlecloudpolicysimulatorv1replaydiff");
var googlerpcstatus_1 = require("./googlerpcstatus");
var googletypedate_1 = require("./googletypedate");
// GoogleCloudPolicysimulatorV1ReplayResult
/**
 * The result of replaying a single access tuple against a simulated state.
**/
var GoogleCloudPolicysimulatorV1ReplayResult = /** @class */ (function (_super) {
    __extends(GoogleCloudPolicysimulatorV1ReplayResult, _super);
    function GoogleCloudPolicysimulatorV1ReplayResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accessTuple" }),
        __metadata("design:type", googlecloudpolicysimulatorv1accesstuple_1.GoogleCloudPolicysimulatorV1AccessTuple)
    ], GoogleCloudPolicysimulatorV1ReplayResult.prototype, "accessTuple", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=diff" }),
        __metadata("design:type", googlecloudpolicysimulatorv1replaydiff_1.GoogleCloudPolicysimulatorV1ReplayDiff)
    ], GoogleCloudPolicysimulatorV1ReplayResult.prototype, "diff", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", googlerpcstatus_1.GoogleRpcStatus)
    ], GoogleCloudPolicysimulatorV1ReplayResult.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lastSeenDate" }),
        __metadata("design:type", googletypedate_1.GoogleTypeDate)
    ], GoogleCloudPolicysimulatorV1ReplayResult.prototype, "lastSeenDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudPolicysimulatorV1ReplayResult.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=parent" }),
        __metadata("design:type", String)
    ], GoogleCloudPolicysimulatorV1ReplayResult.prototype, "parent", void 0);
    return GoogleCloudPolicysimulatorV1ReplayResult;
}(utils_1.SpeakeasyBase));
exports.GoogleCloudPolicysimulatorV1ReplayResult = GoogleCloudPolicysimulatorV1ReplayResult;
