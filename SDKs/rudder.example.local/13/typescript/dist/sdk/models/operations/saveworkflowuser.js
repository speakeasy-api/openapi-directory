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
exports.SaveWorkflowUserResponse = exports.SaveWorkflowUserRequest = exports.SaveWorkflowUser200ApplicationJson = exports.SaveWorkflowUser200ApplicationJsonResultEnum = exports.SaveWorkflowUser200ApplicationJsonActionEnum = exports.SaveWorkflowUserRequestBody = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var SaveWorkflowUserRequestBody = /** @class */ (function (_super) {
    __extends(SaveWorkflowUserRequestBody, _super);
    function SaveWorkflowUserRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=validatedUsers" }),
        __metadata("design:type", Array)
    ], SaveWorkflowUserRequestBody.prototype, "validatedUsers", void 0);
    return SaveWorkflowUserRequestBody;
}(utils_1.SpeakeasyBase));
exports.SaveWorkflowUserRequestBody = SaveWorkflowUserRequestBody;
var SaveWorkflowUser200ApplicationJsonActionEnum;
(function (SaveWorkflowUser200ApplicationJsonActionEnum) {
    SaveWorkflowUser200ApplicationJsonActionEnum["AddUser"] = "addUser";
})(SaveWorkflowUser200ApplicationJsonActionEnum = exports.SaveWorkflowUser200ApplicationJsonActionEnum || (exports.SaveWorkflowUser200ApplicationJsonActionEnum = {}));
var SaveWorkflowUser200ApplicationJsonResultEnum;
(function (SaveWorkflowUser200ApplicationJsonResultEnum) {
    SaveWorkflowUser200ApplicationJsonResultEnum["Success"] = "success";
    SaveWorkflowUser200ApplicationJsonResultEnum["Error"] = "error";
})(SaveWorkflowUser200ApplicationJsonResultEnum = exports.SaveWorkflowUser200ApplicationJsonResultEnum || (exports.SaveWorkflowUser200ApplicationJsonResultEnum = {}));
var SaveWorkflowUser200ApplicationJson = /** @class */ (function (_super) {
    __extends(SaveWorkflowUser200ApplicationJson, _super);
    function SaveWorkflowUser200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], SaveWorkflowUser200ApplicationJson.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", shared.ValidatedUser)
    ], SaveWorkflowUser200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], SaveWorkflowUser200ApplicationJson.prototype, "result", void 0);
    return SaveWorkflowUser200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.SaveWorkflowUser200ApplicationJson = SaveWorkflowUser200ApplicationJson;
var SaveWorkflowUserRequest = /** @class */ (function (_super) {
    __extends(SaveWorkflowUserRequest, _super);
    function SaveWorkflowUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", SaveWorkflowUserRequestBody)
    ], SaveWorkflowUserRequest.prototype, "request", void 0);
    return SaveWorkflowUserRequest;
}(utils_1.SpeakeasyBase));
exports.SaveWorkflowUserRequest = SaveWorkflowUserRequest;
var SaveWorkflowUserResponse = /** @class */ (function (_super) {
    __extends(SaveWorkflowUserResponse, _super);
    function SaveWorkflowUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], SaveWorkflowUserResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], SaveWorkflowUserResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SaveWorkflowUser200ApplicationJson)
    ], SaveWorkflowUserResponse.prototype, "saveWorkflowUser200ApplicationJSONObject", void 0);
    return SaveWorkflowUserResponse;
}(utils_1.SpeakeasyBase));
exports.SaveWorkflowUserResponse = SaveWorkflowUserResponse;
