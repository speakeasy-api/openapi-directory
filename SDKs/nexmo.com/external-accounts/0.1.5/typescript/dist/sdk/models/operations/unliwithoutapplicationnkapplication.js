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
exports.UnliWithoutApplicationnkApplicationResponse = exports.UnliWithoutApplicationnkApplicationRequest = exports.UnliWithoutApplicationnkApplication409ApplicationJson = exports.UnliWithoutApplicationnkApplication403ApplicationJson = exports.UnliWithoutApplicationnkApplicationSecurity = exports.UnliWithoutApplicationnkApplicationPathParams = exports.UnliWithoutApplicationnkApplicationProviderEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UnliWithoutApplicationnkApplicationProviderEnum;
(function (UnliWithoutApplicationnkApplicationProviderEnum) {
    UnliWithoutApplicationnkApplicationProviderEnum["Messenger"] = "messenger";
    UnliWithoutApplicationnkApplicationProviderEnum["ViberServiceMsg"] = "viber_service_msg";
    UnliWithoutApplicationnkApplicationProviderEnum["Whatsapp"] = "whatsapp";
})(UnliWithoutApplicationnkApplicationProviderEnum = exports.UnliWithoutApplicationnkApplicationProviderEnum || (exports.UnliWithoutApplicationnkApplicationProviderEnum = {}));
var UnliWithoutApplicationnkApplicationPathParams = /** @class */ (function (_super) {
    __extends(UnliWithoutApplicationnkApplicationPathParams, _super);
    function UnliWithoutApplicationnkApplicationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=application_id" }),
        __metadata("design:type", String)
    ], UnliWithoutApplicationnkApplicationPathParams.prototype, "applicationId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=external_id" }),
        __metadata("design:type", String)
    ], UnliWithoutApplicationnkApplicationPathParams.prototype, "externalId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=provider" }),
        __metadata("design:type", String)
    ], UnliWithoutApplicationnkApplicationPathParams.prototype, "provider", void 0);
    return UnliWithoutApplicationnkApplicationPathParams;
}(utils_1.SpeakeasyBase));
exports.UnliWithoutApplicationnkApplicationPathParams = UnliWithoutApplicationnkApplicationPathParams;
var UnliWithoutApplicationnkApplicationSecurity = /** @class */ (function (_super) {
    __extends(UnliWithoutApplicationnkApplicationSecurity, _super);
    function UnliWithoutApplicationnkApplicationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuth)
    ], UnliWithoutApplicationnkApplicationSecurity.prototype, "bearerAuth", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuth)
    ], UnliWithoutApplicationnkApplicationSecurity.prototype, "basicAuth", void 0);
    return UnliWithoutApplicationnkApplicationSecurity;
}(utils_1.SpeakeasyBase));
exports.UnliWithoutApplicationnkApplicationSecurity = UnliWithoutApplicationnkApplicationSecurity;
var UnliWithoutApplicationnkApplication403ApplicationJson = /** @class */ (function (_super) {
    __extends(UnliWithoutApplicationnkApplication403ApplicationJson, _super);
    function UnliWithoutApplicationnkApplication403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], UnliWithoutApplicationnkApplication403ApplicationJson.prototype, "detail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], UnliWithoutApplicationnkApplication403ApplicationJson.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], UnliWithoutApplicationnkApplication403ApplicationJson.prototype, "type", void 0);
    return UnliWithoutApplicationnkApplication403ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.UnliWithoutApplicationnkApplication403ApplicationJson = UnliWithoutApplicationnkApplication403ApplicationJson;
var UnliWithoutApplicationnkApplication409ApplicationJson = /** @class */ (function (_super) {
    __extends(UnliWithoutApplicationnkApplication409ApplicationJson, _super);
    function UnliWithoutApplicationnkApplication409ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], UnliWithoutApplicationnkApplication409ApplicationJson.prototype, "detail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], UnliWithoutApplicationnkApplication409ApplicationJson.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], UnliWithoutApplicationnkApplication409ApplicationJson.prototype, "type", void 0);
    return UnliWithoutApplicationnkApplication409ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.UnliWithoutApplicationnkApplication409ApplicationJson = UnliWithoutApplicationnkApplication409ApplicationJson;
var UnliWithoutApplicationnkApplicationRequest = /** @class */ (function (_super) {
    __extends(UnliWithoutApplicationnkApplicationRequest, _super);
    function UnliWithoutApplicationnkApplicationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UnliWithoutApplicationnkApplicationPathParams)
    ], UnliWithoutApplicationnkApplicationRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UnliWithoutApplicationnkApplicationSecurity)
    ], UnliWithoutApplicationnkApplicationRequest.prototype, "security", void 0);
    return UnliWithoutApplicationnkApplicationRequest;
}(utils_1.SpeakeasyBase));
exports.UnliWithoutApplicationnkApplicationRequest = UnliWithoutApplicationnkApplicationRequest;
var UnliWithoutApplicationnkApplicationResponse = /** @class */ (function (_super) {
    __extends(UnliWithoutApplicationnkApplicationResponse, _super);
    function UnliWithoutApplicationnkApplicationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.FourHundredAndOneResponse)
    ], UnliWithoutApplicationnkApplicationResponse.prototype, "fourHundredAndOneResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UnliWithoutApplicationnkApplicationResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UnliWithoutApplicationnkApplicationResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UnliWithoutApplicationnkApplication403ApplicationJson)
    ], UnliWithoutApplicationnkApplicationResponse.prototype, "unliWithoutApplicationnkApplication403ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UnliWithoutApplicationnkApplication409ApplicationJson)
    ], UnliWithoutApplicationnkApplicationResponse.prototype, "unliWithoutApplicationnkApplication409ApplicationJSONObject", void 0);
    return UnliWithoutApplicationnkApplicationResponse;
}(utils_1.SpeakeasyBase));
exports.UnliWithoutApplicationnkApplicationResponse = UnliWithoutApplicationnkApplicationResponse;
