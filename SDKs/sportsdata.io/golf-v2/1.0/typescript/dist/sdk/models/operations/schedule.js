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
exports.ScheduleResponse = exports.ScheduleRequest = exports.SchedulePathParams = exports.ScheduleFormatEnum = void 0;
var utils_1 = require("../../../internal/utils");
var ScheduleFormatEnum;
(function (ScheduleFormatEnum) {
    ScheduleFormatEnum["Xml"] = "XML";
    ScheduleFormatEnum["Json"] = "JSON";
})(ScheduleFormatEnum = exports.ScheduleFormatEnum || (exports.ScheduleFormatEnum = {}));
var SchedulePathParams = /** @class */ (function (_super) {
    __extends(SchedulePathParams, _super);
    function SchedulePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=format" }),
        __metadata("design:type", String)
    ], SchedulePathParams.prototype, "format", void 0);
    return SchedulePathParams;
}(utils_1.SpeakeasyBase));
exports.SchedulePathParams = SchedulePathParams;
var ScheduleRequest = /** @class */ (function (_super) {
    __extends(ScheduleRequest, _super);
    function ScheduleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SchedulePathParams)
    ], ScheduleRequest.prototype, "pathParams", void 0);
    return ScheduleRequest;
}(utils_1.SpeakeasyBase));
exports.ScheduleRequest = ScheduleRequest;
var ScheduleResponse = /** @class */ (function (_super) {
    __extends(ScheduleResponse, _super);
    function ScheduleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ScheduleResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ScheduleResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Array)
    ], ScheduleResponse.prototype, "tournaments", void 0);
    return ScheduleResponse;
}(utils_1.SpeakeasyBase));
exports.ScheduleResponse = ScheduleResponse;
