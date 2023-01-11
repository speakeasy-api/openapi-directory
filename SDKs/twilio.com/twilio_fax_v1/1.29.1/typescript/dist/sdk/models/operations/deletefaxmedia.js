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
exports.DeleteFaxMediaResponse = exports.DeleteFaxMediaRequest = exports.DeleteFaxMediaSecurity = exports.DeleteFaxMediaPathParams = exports.DeleteFaxMediaServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.DeleteFaxMediaServerList = [
    "https://fax.twilio.com",
];
var DeleteFaxMediaPathParams = /** @class */ (function (_super) {
    __extends(DeleteFaxMediaPathParams, _super);
    function DeleteFaxMediaPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=FaxSid" }),
        __metadata("design:type", String)
    ], DeleteFaxMediaPathParams.prototype, "faxSid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], DeleteFaxMediaPathParams.prototype, "sid", void 0);
    return DeleteFaxMediaPathParams;
}(utils_1.SpeakeasyBase));
exports.DeleteFaxMediaPathParams = DeleteFaxMediaPathParams;
var DeleteFaxMediaSecurity = /** @class */ (function (_super) {
    __extends(DeleteFaxMediaSecurity, _super);
    function DeleteFaxMediaSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], DeleteFaxMediaSecurity.prototype, "accountSidAuthToken", void 0);
    return DeleteFaxMediaSecurity;
}(utils_1.SpeakeasyBase));
exports.DeleteFaxMediaSecurity = DeleteFaxMediaSecurity;
var DeleteFaxMediaRequest = /** @class */ (function (_super) {
    __extends(DeleteFaxMediaRequest, _super);
    function DeleteFaxMediaRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DeleteFaxMediaRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteFaxMediaPathParams)
    ], DeleteFaxMediaRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteFaxMediaSecurity)
    ], DeleteFaxMediaRequest.prototype, "security", void 0);
    return DeleteFaxMediaRequest;
}(utils_1.SpeakeasyBase));
exports.DeleteFaxMediaRequest = DeleteFaxMediaRequest;
var DeleteFaxMediaResponse = /** @class */ (function (_super) {
    __extends(DeleteFaxMediaResponse, _super);
    function DeleteFaxMediaResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DeleteFaxMediaResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DeleteFaxMediaResponse.prototype, "statusCode", void 0);
    return DeleteFaxMediaResponse;
}(utils_1.SpeakeasyBase));
exports.DeleteFaxMediaResponse = DeleteFaxMediaResponse;
