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
exports.DeletePayeeByIdV3Response = exports.DeletePayeeByIdV3Request = exports.DeletePayeeByIdV3PathParams = void 0;
var utils_1 = require("../../../internal/utils");
var DeletePayeeByIdV3PathParams = /** @class */ (function (_super) {
    __extends(DeletePayeeByIdV3PathParams, _super);
    function DeletePayeeByIdV3PathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=payeeId" }),
        __metadata("design:type", String)
    ], DeletePayeeByIdV3PathParams.prototype, "payeeId", void 0);
    return DeletePayeeByIdV3PathParams;
}(utils_1.SpeakeasyBase));
exports.DeletePayeeByIdV3PathParams = DeletePayeeByIdV3PathParams;
var DeletePayeeByIdV3Request = /** @class */ (function (_super) {
    __extends(DeletePayeeByIdV3Request, _super);
    function DeletePayeeByIdV3Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeletePayeeByIdV3PathParams)
    ], DeletePayeeByIdV3Request.prototype, "pathParams", void 0);
    return DeletePayeeByIdV3Request;
}(utils_1.SpeakeasyBase));
exports.DeletePayeeByIdV3Request = DeletePayeeByIdV3Request;
var DeletePayeeByIdV3Response = /** @class */ (function (_super) {
    __extends(DeletePayeeByIdV3Response, _super);
    function DeletePayeeByIdV3Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DeletePayeeByIdV3Response.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DeletePayeeByIdV3Response.prototype, "statusCode", void 0);
    return DeletePayeeByIdV3Response;
}(utils_1.SpeakeasyBase));
exports.DeletePayeeByIdV3Response = DeletePayeeByIdV3Response;
