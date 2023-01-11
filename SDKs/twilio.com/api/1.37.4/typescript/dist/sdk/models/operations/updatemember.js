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
exports.UpdateMemberResponse = exports.UpdateMemberRequest = exports.UpdateMemberSecurity = exports.UpdateMemberUpdateMemberRequest = exports.UpdateMemberUpdateMemberRequestMethodEnum = exports.UpdateMemberPathParams = exports.UpdateMemberServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.UpdateMemberServerList = [
    "https://api.twilio.com",
];
var UpdateMemberPathParams = /** @class */ (function (_super) {
    __extends(UpdateMemberPathParams, _super);
    function UpdateMemberPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], UpdateMemberPathParams.prototype, "accountSid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=CallSid" }),
        __metadata("design:type", String)
    ], UpdateMemberPathParams.prototype, "callSid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=QueueSid" }),
        __metadata("design:type", String)
    ], UpdateMemberPathParams.prototype, "queueSid", void 0);
    return UpdateMemberPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateMemberPathParams = UpdateMemberPathParams;
var UpdateMemberUpdateMemberRequestMethodEnum;
(function (UpdateMemberUpdateMemberRequestMethodEnum) {
    UpdateMemberUpdateMemberRequestMethodEnum["Head"] = "HEAD";
    UpdateMemberUpdateMemberRequestMethodEnum["Get"] = "GET";
    UpdateMemberUpdateMemberRequestMethodEnum["Post"] = "POST";
    UpdateMemberUpdateMemberRequestMethodEnum["Patch"] = "PATCH";
    UpdateMemberUpdateMemberRequestMethodEnum["Put"] = "PUT";
    UpdateMemberUpdateMemberRequestMethodEnum["Delete"] = "DELETE";
})(UpdateMemberUpdateMemberRequestMethodEnum = exports.UpdateMemberUpdateMemberRequestMethodEnum || (exports.UpdateMemberUpdateMemberRequestMethodEnum = {}));
var UpdateMemberUpdateMemberRequest = /** @class */ (function (_super) {
    __extends(UpdateMemberUpdateMemberRequest, _super);
    function UpdateMemberUpdateMemberRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Method;" }),
        __metadata("design:type", String)
    ], UpdateMemberUpdateMemberRequest.prototype, "method", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=Url;" }),
        __metadata("design:type", String)
    ], UpdateMemberUpdateMemberRequest.prototype, "url", void 0);
    return UpdateMemberUpdateMemberRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateMemberUpdateMemberRequest = UpdateMemberUpdateMemberRequest;
var UpdateMemberSecurity = /** @class */ (function (_super) {
    __extends(UpdateMemberSecurity, _super);
    function UpdateMemberSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateMemberSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateMemberSecurity;
}(utils_1.SpeakeasyBase));
exports.UpdateMemberSecurity = UpdateMemberSecurity;
var UpdateMemberRequest = /** @class */ (function (_super) {
    __extends(UpdateMemberRequest, _super);
    function UpdateMemberRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateMemberRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateMemberPathParams)
    ], UpdateMemberRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateMemberUpdateMemberRequest)
    ], UpdateMemberRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateMemberSecurity)
    ], UpdateMemberRequest.prototype, "security", void 0);
    return UpdateMemberRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateMemberRequest = UpdateMemberRequest;
var UpdateMemberResponse = /** @class */ (function (_super) {
    __extends(UpdateMemberResponse, _super);
    function UpdateMemberResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateMemberResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateMemberResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ApiV2010AccountQueueMember)
    ], UpdateMemberResponse.prototype, "apiV2010AccountQueueMember", void 0);
    return UpdateMemberResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateMemberResponse = UpdateMemberResponse;
