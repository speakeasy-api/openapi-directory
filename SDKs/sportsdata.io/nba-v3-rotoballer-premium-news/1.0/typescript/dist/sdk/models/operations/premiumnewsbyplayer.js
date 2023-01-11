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
exports.PremiumNewsByPlayerResponse = exports.PremiumNewsByPlayerRequest = exports.PremiumNewsByPlayerPathParams = exports.PremiumNewsByPlayerFormatEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PremiumNewsByPlayerFormatEnum;
(function (PremiumNewsByPlayerFormatEnum) {
    PremiumNewsByPlayerFormatEnum["Xml"] = "xml";
    PremiumNewsByPlayerFormatEnum["Json"] = "json";
})(PremiumNewsByPlayerFormatEnum = exports.PremiumNewsByPlayerFormatEnum || (exports.PremiumNewsByPlayerFormatEnum = {}));
var PremiumNewsByPlayerPathParams = /** @class */ (function (_super) {
    __extends(PremiumNewsByPlayerPathParams, _super);
    function PremiumNewsByPlayerPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=format" }),
        __metadata("design:type", String)
    ], PremiumNewsByPlayerPathParams.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=playerid" }),
        __metadata("design:type", String)
    ], PremiumNewsByPlayerPathParams.prototype, "playerid", void 0);
    return PremiumNewsByPlayerPathParams;
}(utils_1.SpeakeasyBase));
exports.PremiumNewsByPlayerPathParams = PremiumNewsByPlayerPathParams;
var PremiumNewsByPlayerRequest = /** @class */ (function (_super) {
    __extends(PremiumNewsByPlayerRequest, _super);
    function PremiumNewsByPlayerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PremiumNewsByPlayerPathParams)
    ], PremiumNewsByPlayerRequest.prototype, "pathParams", void 0);
    return PremiumNewsByPlayerRequest;
}(utils_1.SpeakeasyBase));
exports.PremiumNewsByPlayerRequest = PremiumNewsByPlayerRequest;
var PremiumNewsByPlayerResponse = /** @class */ (function (_super) {
    __extends(PremiumNewsByPlayerResponse, _super);
    function PremiumNewsByPlayerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PremiumNewsByPlayerResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Array)
    ], PremiumNewsByPlayerResponse.prototype, "news", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PremiumNewsByPlayerResponse.prototype, "statusCode", void 0);
    return PremiumNewsByPlayerResponse;
}(utils_1.SpeakeasyBase));
exports.PremiumNewsByPlayerResponse = PremiumNewsByPlayerResponse;
