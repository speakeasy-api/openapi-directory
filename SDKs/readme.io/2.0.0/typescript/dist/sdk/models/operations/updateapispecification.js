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
exports.UpdateApiSpecificationResponse = exports.UpdateApiSpecificationRequest = exports.UpdateApiSpecificationSecurity = exports.UpdateApiSpecificationRequestBody = exports.UpdateApiSpecificationRequestBodySpec = exports.UpdateApiSpecificationPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UpdateApiSpecificationPathParams = /** @class */ (function (_super) {
    __extends(UpdateApiSpecificationPathParams, _super);
    function UpdateApiSpecificationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], UpdateApiSpecificationPathParams.prototype, "id", void 0);
    return UpdateApiSpecificationPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateApiSpecificationPathParams = UpdateApiSpecificationPathParams;
var UpdateApiSpecificationRequestBodySpec = /** @class */ (function (_super) {
    __extends(UpdateApiSpecificationRequestBodySpec, _super);
    function UpdateApiSpecificationRequestBodySpec() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, content=true" }),
        __metadata("design:type", Uint8Array)
    ], UpdateApiSpecificationRequestBodySpec.prototype, "content", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=spec" }),
        __metadata("design:type", String)
    ], UpdateApiSpecificationRequestBodySpec.prototype, "spec", void 0);
    return UpdateApiSpecificationRequestBodySpec;
}(utils_1.SpeakeasyBase));
exports.UpdateApiSpecificationRequestBodySpec = UpdateApiSpecificationRequestBodySpec;
var UpdateApiSpecificationRequestBody = /** @class */ (function (_super) {
    __extends(UpdateApiSpecificationRequestBody, _super);
    function UpdateApiSpecificationRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, file=true" }),
        __metadata("design:type", UpdateApiSpecificationRequestBodySpec)
    ], UpdateApiSpecificationRequestBody.prototype, "spec", void 0);
    return UpdateApiSpecificationRequestBody;
}(utils_1.SpeakeasyBase));
exports.UpdateApiSpecificationRequestBody = UpdateApiSpecificationRequestBody;
var UpdateApiSpecificationSecurity = /** @class */ (function (_super) {
    __extends(UpdateApiSpecificationSecurity, _super);
    function UpdateApiSpecificationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], UpdateApiSpecificationSecurity.prototype, "apiKey", void 0);
    return UpdateApiSpecificationSecurity;
}(utils_1.SpeakeasyBase));
exports.UpdateApiSpecificationSecurity = UpdateApiSpecificationSecurity;
var UpdateApiSpecificationRequest = /** @class */ (function (_super) {
    __extends(UpdateApiSpecificationRequest, _super);
    function UpdateApiSpecificationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateApiSpecificationPathParams)
    ], UpdateApiSpecificationRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", UpdateApiSpecificationRequestBody)
    ], UpdateApiSpecificationRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateApiSpecificationSecurity)
    ], UpdateApiSpecificationRequest.prototype, "security", void 0);
    return UpdateApiSpecificationRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateApiSpecificationRequest = UpdateApiSpecificationRequest;
var UpdateApiSpecificationResponse = /** @class */ (function (_super) {
    __extends(UpdateApiSpecificationResponse, _super);
    function UpdateApiSpecificationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateApiSpecificationResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateApiSpecificationResponse.prototype, "statusCode", void 0);
    return UpdateApiSpecificationResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateApiSpecificationResponse = UpdateApiSpecificationResponse;
