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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserResponse = exports.UpdateUserRequest = exports.UpdateUser200ApplicationJson = exports.UpdateUser200ApplicationJsonResultEnum = exports.UpdateUser200ApplicationJsonData = exports.UpdateUser200ApplicationJsonDataUpdatedUser = exports.UpdateUser200ApplicationJsonActionEnum = exports.UpdateUserPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UpdateUserPathParams = /** @class */ (function (_super) {
    __extends(UpdateUserPathParams, _super);
    function UpdateUserPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=username" }),
        __metadata("design:type", String)
    ], UpdateUserPathParams.prototype, "username", void 0);
    return UpdateUserPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateUserPathParams = UpdateUserPathParams;
var UpdateUser200ApplicationJsonActionEnum;
(function (UpdateUser200ApplicationJsonActionEnum) {
    UpdateUser200ApplicationJsonActionEnum["UpdateUser"] = "updateUser";
})(UpdateUser200ApplicationJsonActionEnum = exports.UpdateUser200ApplicationJsonActionEnum || (exports.UpdateUser200ApplicationJsonActionEnum = {}));
var UpdateUser200ApplicationJsonDataUpdatedUser = /** @class */ (function (_super) {
    __extends(UpdateUser200ApplicationJsonDataUpdatedUser, _super);
    function UpdateUser200ApplicationJsonDataUpdatedUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], UpdateUser200ApplicationJsonDataUpdatedUser.prototype, "password", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=role" }),
        __metadata("design:type", Array)
    ], UpdateUser200ApplicationJsonDataUpdatedUser.prototype, "role", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], UpdateUser200ApplicationJsonDataUpdatedUser.prototype, "username", void 0);
    return UpdateUser200ApplicationJsonDataUpdatedUser;
}(utils_1.SpeakeasyBase));
exports.UpdateUser200ApplicationJsonDataUpdatedUser = UpdateUser200ApplicationJsonDataUpdatedUser;
var UpdateUser200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(UpdateUser200ApplicationJsonData, _super);
    function UpdateUser200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updatedUser" }),
        __metadata("design:type", UpdateUser200ApplicationJsonDataUpdatedUser)
    ], UpdateUser200ApplicationJsonData.prototype, "updatedUser", void 0);
    return UpdateUser200ApplicationJsonData;
}(utils_1.SpeakeasyBase));
exports.UpdateUser200ApplicationJsonData = UpdateUser200ApplicationJsonData;
var UpdateUser200ApplicationJsonResultEnum;
(function (UpdateUser200ApplicationJsonResultEnum) {
    UpdateUser200ApplicationJsonResultEnum["Success"] = "success";
    UpdateUser200ApplicationJsonResultEnum["Error"] = "error";
})(UpdateUser200ApplicationJsonResultEnum = exports.UpdateUser200ApplicationJsonResultEnum || (exports.UpdateUser200ApplicationJsonResultEnum = {}));
var UpdateUser200ApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateUser200ApplicationJson, _super);
    function UpdateUser200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], UpdateUser200ApplicationJson.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", UpdateUser200ApplicationJsonData)
    ], UpdateUser200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], UpdateUser200ApplicationJson.prototype, "result", void 0);
    return UpdateUser200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.UpdateUser200ApplicationJson = UpdateUser200ApplicationJson;
var UpdateUserRequest = /** @class */ (function (_super) {
    __extends(UpdateUserRequest, _super);
    function UpdateUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateUserPathParams)
    ], UpdateUserRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Users)
    ], UpdateUserRequest.prototype, "request", void 0);
    return UpdateUserRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateUserRequest = UpdateUserRequest;
var UpdateUserResponse = /** @class */ (function (_super) {
    __extends(UpdateUserResponse, _super);
    function UpdateUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateUserResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateUserResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateUser200ApplicationJson)
    ], UpdateUserResponse.prototype, "updateUser200ApplicationJSONObject", void 0);
    return UpdateUserResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateUserResponse = UpdateUserResponse;
