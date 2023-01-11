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
exports.PurgeSoftwareResponse = exports.PurgeSoftware200ApplicationJson = exports.PurgeSoftware200ApplicationJsonResultEnum = exports.PurgeSoftware200ApplicationJsonActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PurgeSoftware200ApplicationJsonActionEnum;
(function (PurgeSoftware200ApplicationJsonActionEnum) {
    PurgeSoftware200ApplicationJsonActionEnum["PurgeSoftware"] = "purgeSoftware";
})(PurgeSoftware200ApplicationJsonActionEnum = exports.PurgeSoftware200ApplicationJsonActionEnum || (exports.PurgeSoftware200ApplicationJsonActionEnum = {}));
var PurgeSoftware200ApplicationJsonResultEnum;
(function (PurgeSoftware200ApplicationJsonResultEnum) {
    PurgeSoftware200ApplicationJsonResultEnum["Success"] = "success";
    PurgeSoftware200ApplicationJsonResultEnum["Error"] = "error";
})(PurgeSoftware200ApplicationJsonResultEnum = exports.PurgeSoftware200ApplicationJsonResultEnum || (exports.PurgeSoftware200ApplicationJsonResultEnum = {}));
var PurgeSoftware200ApplicationJson = /** @class */ (function (_super) {
    __extends(PurgeSoftware200ApplicationJson, _super);
    function PurgeSoftware200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], PurgeSoftware200ApplicationJson.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Array)
    ], PurgeSoftware200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], PurgeSoftware200ApplicationJson.prototype, "result", void 0);
    return PurgeSoftware200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PurgeSoftware200ApplicationJson = PurgeSoftware200ApplicationJson;
var PurgeSoftwareResponse = /** @class */ (function (_super) {
    __extends(PurgeSoftwareResponse, _super);
    function PurgeSoftwareResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PurgeSoftwareResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PurgeSoftwareResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PurgeSoftware200ApplicationJson)
    ], PurgeSoftwareResponse.prototype, "purgeSoftware200ApplicationJSONObject", void 0);
    return PurgeSoftwareResponse;
}(utils_1.SpeakeasyBase));
exports.PurgeSoftwareResponse = PurgeSoftwareResponse;
