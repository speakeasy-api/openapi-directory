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
exports.DeleteJobByIdResponse = exports.DeleteJobByIdRequest = exports.DeleteJobById409ApplicationProblemPlusJson = exports.DeleteJobById404ApplicationProblemPlusJson = exports.DeleteJobByIdPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var DeleteJobByIdPathParams = /** @class */ (function (_super) {
    __extends(DeleteJobByIdPathParams, _super);
    function DeleteJobByIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], DeleteJobByIdPathParams.prototype, "id", void 0);
    return DeleteJobByIdPathParams;
}(utils_1.SpeakeasyBase));
exports.DeleteJobByIdPathParams = DeleteJobByIdPathParams;
// DeleteJobById404ApplicationProblemPlusJson
/**
 * Problem details object returned on errors
**/
var DeleteJobById404ApplicationProblemPlusJson = /** @class */ (function (_super) {
    __extends(DeleteJobById404ApplicationProblemPlusJson, _super);
    function DeleteJobById404ApplicationProblemPlusJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], DeleteJobById404ApplicationProblemPlusJson.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], DeleteJobById404ApplicationProblemPlusJson.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], DeleteJobById404ApplicationProblemPlusJson.prototype, "type", void 0);
    return DeleteJobById404ApplicationProblemPlusJson;
}(utils_1.SpeakeasyBase));
exports.DeleteJobById404ApplicationProblemPlusJson = DeleteJobById404ApplicationProblemPlusJson;
// DeleteJobById409ApplicationProblemPlusJson
/**
 * Problem details object returned on errors
**/
var DeleteJobById409ApplicationProblemPlusJson = /** @class */ (function (_super) {
    __extends(DeleteJobById409ApplicationProblemPlusJson, _super);
    function DeleteJobById409ApplicationProblemPlusJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allowed_values" }),
        __metadata("design:type", Array)
    ], DeleteJobById409ApplicationProblemPlusJson.prototype, "allowedValues", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=current_value" }),
        __metadata("design:type", String)
    ], DeleteJobById409ApplicationProblemPlusJson.prototype, "currentValue", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], DeleteJobById409ApplicationProblemPlusJson.prototype, "detail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], DeleteJobById409ApplicationProblemPlusJson.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], DeleteJobById409ApplicationProblemPlusJson.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], DeleteJobById409ApplicationProblemPlusJson.prototype, "type", void 0);
    return DeleteJobById409ApplicationProblemPlusJson;
}(utils_1.SpeakeasyBase));
exports.DeleteJobById409ApplicationProblemPlusJson = DeleteJobById409ApplicationProblemPlusJson;
var DeleteJobByIdRequest = /** @class */ (function (_super) {
    __extends(DeleteJobByIdRequest, _super);
    function DeleteJobByIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteJobByIdPathParams)
    ], DeleteJobByIdRequest.prototype, "pathParams", void 0);
    return DeleteJobByIdRequest;
}(utils_1.SpeakeasyBase));
exports.DeleteJobByIdRequest = DeleteJobByIdRequest;
var DeleteJobByIdResponse = /** @class */ (function (_super) {
    __extends(DeleteJobByIdResponse, _super);
    function DeleteJobByIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DeleteJobByIdResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DeleteJobByIdResponse.prototype, "deleteJobById401ApplicationProblemPlusJsonAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteJobById404ApplicationProblemPlusJson)
    ], DeleteJobByIdResponse.prototype, "deleteJobById404ApplicationProblemPlusJsonObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteJobById409ApplicationProblemPlusJson)
    ], DeleteJobByIdResponse.prototype, "deleteJobById409ApplicationProblemPlusJsonObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DeleteJobByIdResponse.prototype, "statusCode", void 0);
    return DeleteJobByIdResponse;
}(utils_1.SpeakeasyBase));
exports.DeleteJobByIdResponse = DeleteJobByIdResponse;
