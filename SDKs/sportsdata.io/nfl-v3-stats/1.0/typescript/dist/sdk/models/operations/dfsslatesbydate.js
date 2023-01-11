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
exports.DfsSlatesByDateResponse = exports.DfsSlatesByDateRequest = exports.DfsSlatesByDatePathParams = exports.DfsSlatesByDateFormatEnum = void 0;
var utils_1 = require("../../../internal/utils");
var DfsSlatesByDateFormatEnum;
(function (DfsSlatesByDateFormatEnum) {
    DfsSlatesByDateFormatEnum["Xml"] = "XML";
    DfsSlatesByDateFormatEnum["Json"] = "JSON";
})(DfsSlatesByDateFormatEnum = exports.DfsSlatesByDateFormatEnum || (exports.DfsSlatesByDateFormatEnum = {}));
var DfsSlatesByDatePathParams = /** @class */ (function (_super) {
    __extends(DfsSlatesByDatePathParams, _super);
    function DfsSlatesByDatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=date" }),
        __metadata("design:type", String)
    ], DfsSlatesByDatePathParams.prototype, "date", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=format" }),
        __metadata("design:type", String)
    ], DfsSlatesByDatePathParams.prototype, "format", void 0);
    return DfsSlatesByDatePathParams;
}(utils_1.SpeakeasyBase));
exports.DfsSlatesByDatePathParams = DfsSlatesByDatePathParams;
var DfsSlatesByDateRequest = /** @class */ (function (_super) {
    __extends(DfsSlatesByDateRequest, _super);
    function DfsSlatesByDateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DfsSlatesByDatePathParams)
    ], DfsSlatesByDateRequest.prototype, "pathParams", void 0);
    return DfsSlatesByDateRequest;
}(utils_1.SpeakeasyBase));
exports.DfsSlatesByDateRequest = DfsSlatesByDateRequest;
var DfsSlatesByDateResponse = /** @class */ (function (_super) {
    __extends(DfsSlatesByDateResponse, _super);
    function DfsSlatesByDateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DfsSlatesByDateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Array)
    ], DfsSlatesByDateResponse.prototype, "dfsSlates", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DfsSlatesByDateResponse.prototype, "statusCode", void 0);
    return DfsSlatesByDateResponse;
}(utils_1.SpeakeasyBase));
exports.DfsSlatesByDateResponse = DfsSlatesByDateResponse;
