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
exports.ApiCounterV2Out = void 0;
var utils_1 = require("../../../internal/utils");
var apikeyout_1 = require("./apikeyout");
// ApiCounterV2Out
/**
 * Detailed usage as reported by the deduplicating API counter.
**/
var ApiCounterV2Out = /** @class */ (function (_super) {
    __extends(ApiCounterV2Out, _super);
    function ApiCounterV2Out() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=apiKey" }),
        __metadata("design:type", apikeyout_1.ApiKeyOut)
    ], ApiCounterV2Out.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=apiService" }),
        __metadata("design:type", String)
    ], ApiCounterV2Out.prototype, "apiService", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createdDateTime" }),
        __metadata("design:type", Number)
    ], ApiCounterV2Out.prototype, "createdDateTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lastFlushedDateTime" }),
        __metadata("design:type", Number)
    ], ApiCounterV2Out.prototype, "lastFlushedDateTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lastUsedDateTime" }),
        __metadata("design:type", Number)
    ], ApiCounterV2Out.prototype, "lastUsedDateTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=serviceFeaturesUsage" }),
        __metadata("design:type", Object)
    ], ApiCounterV2Out.prototype, "serviceFeaturesUsage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=totalUsage" }),
        __metadata("design:type", Number)
    ], ApiCounterV2Out.prototype, "totalUsage", void 0);
    return ApiCounterV2Out;
}(utils_1.SpeakeasyBase));
exports.ApiCounterV2Out = ApiCounterV2Out;
