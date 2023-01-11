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
exports.CreateUserDefinedMessageSubscriptionResponse = exports.CreateUserDefinedMessageSubscriptionRequest = exports.CreateUserDefinedMessageSubscriptionSecurity = exports.CreateUserDefinedMessageSubscriptionCreateUserDefinedMessageSubscriptionRequest = exports.CreateUserDefinedMessageSubscriptionCreateUserDefinedMessageSubscriptionRequestMethodEnum = exports.CreateUserDefinedMessageSubscriptionPathParams = exports.CreateUserDefinedMessageSubscriptionServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.CreateUserDefinedMessageSubscriptionServerList = [
    "https://api.twilio.com",
];
var CreateUserDefinedMessageSubscriptionPathParams = /** @class */ (function (_super) {
    __extends(CreateUserDefinedMessageSubscriptionPathParams, _super);
    function CreateUserDefinedMessageSubscriptionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], CreateUserDefinedMessageSubscriptionPathParams.prototype, "accountSid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=CallSid" }),
        __metadata("design:type", String)
    ], CreateUserDefinedMessageSubscriptionPathParams.prototype, "callSid", void 0);
    return CreateUserDefinedMessageSubscriptionPathParams;
}(utils_1.SpeakeasyBase));
exports.CreateUserDefinedMessageSubscriptionPathParams = CreateUserDefinedMessageSubscriptionPathParams;
var CreateUserDefinedMessageSubscriptionCreateUserDefinedMessageSubscriptionRequestMethodEnum;
(function (CreateUserDefinedMessageSubscriptionCreateUserDefinedMessageSubscriptionRequestMethodEnum) {
    CreateUserDefinedMessageSubscriptionCreateUserDefinedMessageSubscriptionRequestMethodEnum["Head"] = "HEAD";
    CreateUserDefinedMessageSubscriptionCreateUserDefinedMessageSubscriptionRequestMethodEnum["Get"] = "GET";
    CreateUserDefinedMessageSubscriptionCreateUserDefinedMessageSubscriptionRequestMethodEnum["Post"] = "POST";
    CreateUserDefinedMessageSubscriptionCreateUserDefinedMessageSubscriptionRequestMethodEnum["Patch"] = "PATCH";
    CreateUserDefinedMessageSubscriptionCreateUserDefinedMessageSubscriptionRequestMethodEnum["Put"] = "PUT";
    CreateUserDefinedMessageSubscriptionCreateUserDefinedMessageSubscriptionRequestMethodEnum["Delete"] = "DELETE";
})(CreateUserDefinedMessageSubscriptionCreateUserDefinedMessageSubscriptionRequestMethodEnum = exports.CreateUserDefinedMessageSubscriptionCreateUserDefinedMessageSubscriptionRequestMethodEnum || (exports.CreateUserDefinedMessageSubscriptionCreateUserDefinedMessageSubscriptionRequestMethodEnum = {}));
var CreateUserDefinedMessageSubscriptionCreateUserDefinedMessageSubscriptionRequest = /** @class */ (function (_super) {
    __extends(CreateUserDefinedMessageSubscriptionCreateUserDefinedMessageSubscriptionRequest, _super);
    function CreateUserDefinedMessageSubscriptionCreateUserDefinedMessageSubscriptionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Callback;" }),
        __metadata("design:type", String)
    ], CreateUserDefinedMessageSubscriptionCreateUserDefinedMessageSubscriptionRequest.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=IdempotencyKey;" }),
        __metadata("design:type", String)
    ], CreateUserDefinedMessageSubscriptionCreateUserDefinedMessageSubscriptionRequest.prototype, "idempotencyKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Method;" }),
        __metadata("design:type", String)
    ], CreateUserDefinedMessageSubscriptionCreateUserDefinedMessageSubscriptionRequest.prototype, "method", void 0);
    return CreateUserDefinedMessageSubscriptionCreateUserDefinedMessageSubscriptionRequest;
}(utils_1.SpeakeasyBase));
exports.CreateUserDefinedMessageSubscriptionCreateUserDefinedMessageSubscriptionRequest = CreateUserDefinedMessageSubscriptionCreateUserDefinedMessageSubscriptionRequest;
var CreateUserDefinedMessageSubscriptionSecurity = /** @class */ (function (_super) {
    __extends(CreateUserDefinedMessageSubscriptionSecurity, _super);
    function CreateUserDefinedMessageSubscriptionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateUserDefinedMessageSubscriptionSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateUserDefinedMessageSubscriptionSecurity;
}(utils_1.SpeakeasyBase));
exports.CreateUserDefinedMessageSubscriptionSecurity = CreateUserDefinedMessageSubscriptionSecurity;
var CreateUserDefinedMessageSubscriptionRequest = /** @class */ (function (_super) {
    __extends(CreateUserDefinedMessageSubscriptionRequest, _super);
    function CreateUserDefinedMessageSubscriptionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateUserDefinedMessageSubscriptionRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateUserDefinedMessageSubscriptionPathParams)
    ], CreateUserDefinedMessageSubscriptionRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateUserDefinedMessageSubscriptionCreateUserDefinedMessageSubscriptionRequest)
    ], CreateUserDefinedMessageSubscriptionRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateUserDefinedMessageSubscriptionSecurity)
    ], CreateUserDefinedMessageSubscriptionRequest.prototype, "security", void 0);
    return CreateUserDefinedMessageSubscriptionRequest;
}(utils_1.SpeakeasyBase));
exports.CreateUserDefinedMessageSubscriptionRequest = CreateUserDefinedMessageSubscriptionRequest;
var CreateUserDefinedMessageSubscriptionResponse = /** @class */ (function (_super) {
    __extends(CreateUserDefinedMessageSubscriptionResponse, _super);
    function CreateUserDefinedMessageSubscriptionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateUserDefinedMessageSubscriptionResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateUserDefinedMessageSubscriptionResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ApiV2010AccountCallUserDefinedMessageSubscription)
    ], CreateUserDefinedMessageSubscriptionResponse.prototype, "apiV2010AccountCallUserDefinedMessageSubscription", void 0);
    return CreateUserDefinedMessageSubscriptionResponse;
}(utils_1.SpeakeasyBase));
exports.CreateUserDefinedMessageSubscriptionResponse = CreateUserDefinedMessageSubscriptionResponse;
