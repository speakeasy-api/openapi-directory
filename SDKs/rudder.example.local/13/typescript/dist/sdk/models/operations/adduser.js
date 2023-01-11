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
exports.AddUserResponse = exports.AddUserRequest = exports.AddUser200ApplicationJson = exports.AddUser200ApplicationJsonResultEnum = exports.AddUser200ApplicationJsonData = exports.AddUser200ApplicationJsonDataAddedUser = exports.AddUser200ApplicationJsonActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var AddUser200ApplicationJsonActionEnum;
(function (AddUser200ApplicationJsonActionEnum) {
    AddUser200ApplicationJsonActionEnum["AddUser"] = "addUser";
})(AddUser200ApplicationJsonActionEnum = exports.AddUser200ApplicationJsonActionEnum || (exports.AddUser200ApplicationJsonActionEnum = {}));
var AddUser200ApplicationJsonDataAddedUser = /** @class */ (function (_super) {
    __extends(AddUser200ApplicationJsonDataAddedUser, _super);
    function AddUser200ApplicationJsonDataAddedUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], AddUser200ApplicationJsonDataAddedUser.prototype, "password", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=role" }),
        __metadata("design:type", Array)
    ], AddUser200ApplicationJsonDataAddedUser.prototype, "role", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], AddUser200ApplicationJsonDataAddedUser.prototype, "username", void 0);
    return AddUser200ApplicationJsonDataAddedUser;
}(utils_1.SpeakeasyBase));
exports.AddUser200ApplicationJsonDataAddedUser = AddUser200ApplicationJsonDataAddedUser;
var AddUser200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(AddUser200ApplicationJsonData, _super);
    function AddUser200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=addedUser" }),
        __metadata("design:type", AddUser200ApplicationJsonDataAddedUser)
    ], AddUser200ApplicationJsonData.prototype, "addedUser", void 0);
    return AddUser200ApplicationJsonData;
}(utils_1.SpeakeasyBase));
exports.AddUser200ApplicationJsonData = AddUser200ApplicationJsonData;
var AddUser200ApplicationJsonResultEnum;
(function (AddUser200ApplicationJsonResultEnum) {
    AddUser200ApplicationJsonResultEnum["Success"] = "success";
    AddUser200ApplicationJsonResultEnum["Error"] = "error";
})(AddUser200ApplicationJsonResultEnum = exports.AddUser200ApplicationJsonResultEnum || (exports.AddUser200ApplicationJsonResultEnum = {}));
var AddUser200ApplicationJson = /** @class */ (function (_super) {
    __extends(AddUser200ApplicationJson, _super);
    function AddUser200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], AddUser200ApplicationJson.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", AddUser200ApplicationJsonData)
    ], AddUser200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], AddUser200ApplicationJson.prototype, "result", void 0);
    return AddUser200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.AddUser200ApplicationJson = AddUser200ApplicationJson;
var AddUserRequest = /** @class */ (function (_super) {
    __extends(AddUserRequest, _super);
    function AddUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Users)
    ], AddUserRequest.prototype, "request", void 0);
    return AddUserRequest;
}(utils_1.SpeakeasyBase));
exports.AddUserRequest = AddUserRequest;
var AddUserResponse = /** @class */ (function (_super) {
    __extends(AddUserResponse, _super);
    function AddUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AddUserResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AddUserResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AddUser200ApplicationJson)
    ], AddUserResponse.prototype, "addUser200ApplicationJSONObject", void 0);
    return AddUserResponse;
}(utils_1.SpeakeasyBase));
exports.AddUserResponse = AddUserResponse;
