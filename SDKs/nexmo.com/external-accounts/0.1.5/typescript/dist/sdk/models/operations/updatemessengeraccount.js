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
exports.UpdateMessengerAccountResponse = exports.UpdateMessengerAccountRequest = exports.UpdateMessengerAccount400ApplicationJson = exports.UpdateMessengerAccount400ApplicationJsonInvalidParams = exports.UpdateMessengerAccount200ApplicationJson = exports.UpdateMessengerAccountSecurity = exports.UpdateMessengerAccountRequestBody = exports.UpdateMessengerAccountPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UpdateMessengerAccountPathParams = /** @class */ (function (_super) {
    __extends(UpdateMessengerAccountPathParams, _super);
    function UpdateMessengerAccountPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=external_id" }),
        __metadata("design:type", String)
    ], UpdateMessengerAccountPathParams.prototype, "externalId", void 0);
    return UpdateMessengerAccountPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateMessengerAccountPathParams = UpdateMessengerAccountPathParams;
var UpdateMessengerAccountRequestBody = /** @class */ (function (_super) {
    __extends(UpdateMessengerAccountRequestBody, _super);
    function UpdateMessengerAccountRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=access_token" }),
        __metadata("design:type", String)
    ], UpdateMessengerAccountRequestBody.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=applications" }),
        __metadata("design:type", Array)
    ], UpdateMessengerAccountRequestBody.prototype, "applications", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateMessengerAccountRequestBody.prototype, "name", void 0);
    return UpdateMessengerAccountRequestBody;
}(utils_1.SpeakeasyBase));
exports.UpdateMessengerAccountRequestBody = UpdateMessengerAccountRequestBody;
var UpdateMessengerAccountSecurity = /** @class */ (function (_super) {
    __extends(UpdateMessengerAccountSecurity, _super);
    function UpdateMessengerAccountSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuth)
    ], UpdateMessengerAccountSecurity.prototype, "bearerAuth", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuth)
    ], UpdateMessengerAccountSecurity.prototype, "basicAuth", void 0);
    return UpdateMessengerAccountSecurity;
}(utils_1.SpeakeasyBase));
exports.UpdateMessengerAccountSecurity = UpdateMessengerAccountSecurity;
var UpdateMessengerAccount200ApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateMessengerAccount200ApplicationJson, _super);
    function UpdateMessengerAccount200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=access_token" }),
        __metadata("design:type", String)
    ], UpdateMessengerAccount200ApplicationJson.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=api_key" }),
        __metadata("design:type", String)
    ], UpdateMessengerAccount200ApplicationJson.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=applications" }),
        __metadata("design:type", Array)
    ], UpdateMessengerAccount200ApplicationJson.prototype, "applications", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=external_id" }),
        __metadata("design:type", String)
    ], UpdateMessengerAccount200ApplicationJson.prototype, "externalId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateMessengerAccount200ApplicationJson.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=provider" }),
        __metadata("design:type", String)
    ], UpdateMessengerAccount200ApplicationJson.prototype, "provider", void 0);
    return UpdateMessengerAccount200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.UpdateMessengerAccount200ApplicationJson = UpdateMessengerAccount200ApplicationJson;
var UpdateMessengerAccount400ApplicationJsonInvalidParams = /** @class */ (function (_super) {
    __extends(UpdateMessengerAccount400ApplicationJsonInvalidParams, _super);
    function UpdateMessengerAccount400ApplicationJsonInvalidParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateMessengerAccount400ApplicationJsonInvalidParams.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=reason" }),
        __metadata("design:type", String)
    ], UpdateMessengerAccount400ApplicationJsonInvalidParams.prototype, "reason", void 0);
    return UpdateMessengerAccount400ApplicationJsonInvalidParams;
}(utils_1.SpeakeasyBase));
exports.UpdateMessengerAccount400ApplicationJsonInvalidParams = UpdateMessengerAccount400ApplicationJsonInvalidParams;
var UpdateMessengerAccount400ApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateMessengerAccount400ApplicationJson, _super);
    function UpdateMessengerAccount400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], UpdateMessengerAccount400ApplicationJson.prototype, "detail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=instance" }),
        __metadata("design:type", String)
    ], UpdateMessengerAccount400ApplicationJson.prototype, "instance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=invalid_params", elemType: UpdateMessengerAccount400ApplicationJsonInvalidParams }),
        __metadata("design:type", Array)
    ], UpdateMessengerAccount400ApplicationJson.prototype, "invalidParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], UpdateMessengerAccount400ApplicationJson.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], UpdateMessengerAccount400ApplicationJson.prototype, "type", void 0);
    return UpdateMessengerAccount400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.UpdateMessengerAccount400ApplicationJson = UpdateMessengerAccount400ApplicationJson;
var UpdateMessengerAccountRequest = /** @class */ (function (_super) {
    __extends(UpdateMessengerAccountRequest, _super);
    function UpdateMessengerAccountRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateMessengerAccountPathParams)
    ], UpdateMessengerAccountRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateMessengerAccountRequestBody)
    ], UpdateMessengerAccountRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateMessengerAccountSecurity)
    ], UpdateMessengerAccountRequest.prototype, "security", void 0);
    return UpdateMessengerAccountRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateMessengerAccountRequest = UpdateMessengerAccountRequest;
var UpdateMessengerAccountResponse = /** @class */ (function (_super) {
    __extends(UpdateMessengerAccountResponse, _super);
    function UpdateMessengerAccountResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.FourHundredAndOneResponse)
    ], UpdateMessengerAccountResponse.prototype, "fourHundredAndOneResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.FourHundredAndThreeResponse)
    ], UpdateMessengerAccountResponse.prototype, "fourHundredAndThreeResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateMessengerAccountResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateMessengerAccountResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateMessengerAccount200ApplicationJson)
    ], UpdateMessengerAccountResponse.prototype, "updateMessengerAccount200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateMessengerAccount400ApplicationJson)
    ], UpdateMessengerAccountResponse.prototype, "updateMessengerAccount400ApplicationJSONObject", void 0);
    return UpdateMessengerAccountResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateMessengerAccountResponse = UpdateMessengerAccountResponse;
