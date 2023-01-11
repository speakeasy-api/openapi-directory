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
exports.ReplicapoolPoolsGetResponse = exports.ReplicapoolPoolsGetRequest = exports.ReplicapoolPoolsGetSecurity = exports.ReplicapoolPoolsGetSecurityOption6 = exports.ReplicapoolPoolsGetSecurityOption5 = exports.ReplicapoolPoolsGetSecurityOption4 = exports.ReplicapoolPoolsGetSecurityOption3 = exports.ReplicapoolPoolsGetSecurityOption2 = exports.ReplicapoolPoolsGetSecurityOption1 = exports.ReplicapoolPoolsGetQueryParams = exports.ReplicapoolPoolsGetPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ReplicapoolPoolsGetPathParams = /** @class */ (function (_super) {
    __extends(ReplicapoolPoolsGetPathParams, _super);
    function ReplicapoolPoolsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=poolName" }),
        __metadata("design:type", String)
    ], ReplicapoolPoolsGetPathParams.prototype, "poolName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=projectName" }),
        __metadata("design:type", String)
    ], ReplicapoolPoolsGetPathParams.prototype, "projectName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=zone" }),
        __metadata("design:type", String)
    ], ReplicapoolPoolsGetPathParams.prototype, "zone", void 0);
    return ReplicapoolPoolsGetPathParams;
}(utils_1.SpeakeasyBase));
exports.ReplicapoolPoolsGetPathParams = ReplicapoolPoolsGetPathParams;
var ReplicapoolPoolsGetQueryParams = /** @class */ (function (_super) {
    __extends(ReplicapoolPoolsGetQueryParams, _super);
    function ReplicapoolPoolsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ReplicapoolPoolsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ReplicapoolPoolsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ReplicapoolPoolsGetQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ReplicapoolPoolsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ReplicapoolPoolsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ReplicapoolPoolsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], ReplicapoolPoolsGetQueryParams.prototype, "userIp", void 0);
    return ReplicapoolPoolsGetQueryParams;
}(utils_1.SpeakeasyBase));
exports.ReplicapoolPoolsGetQueryParams = ReplicapoolPoolsGetQueryParams;
var ReplicapoolPoolsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(ReplicapoolPoolsGetSecurityOption1, _super);
    function ReplicapoolPoolsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ReplicapoolPoolsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ReplicapoolPoolsGetSecurityOption1.prototype, "oauth2c", void 0);
    return ReplicapoolPoolsGetSecurityOption1;
}(utils_1.SpeakeasyBase));
exports.ReplicapoolPoolsGetSecurityOption1 = ReplicapoolPoolsGetSecurityOption1;
var ReplicapoolPoolsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(ReplicapoolPoolsGetSecurityOption2, _super);
    function ReplicapoolPoolsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ReplicapoolPoolsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ReplicapoolPoolsGetSecurityOption2.prototype, "oauth2c", void 0);
    return ReplicapoolPoolsGetSecurityOption2;
}(utils_1.SpeakeasyBase));
exports.ReplicapoolPoolsGetSecurityOption2 = ReplicapoolPoolsGetSecurityOption2;
var ReplicapoolPoolsGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(ReplicapoolPoolsGetSecurityOption3, _super);
    function ReplicapoolPoolsGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ReplicapoolPoolsGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ReplicapoolPoolsGetSecurityOption3.prototype, "oauth2c", void 0);
    return ReplicapoolPoolsGetSecurityOption3;
}(utils_1.SpeakeasyBase));
exports.ReplicapoolPoolsGetSecurityOption3 = ReplicapoolPoolsGetSecurityOption3;
var ReplicapoolPoolsGetSecurityOption4 = /** @class */ (function (_super) {
    __extends(ReplicapoolPoolsGetSecurityOption4, _super);
    function ReplicapoolPoolsGetSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ReplicapoolPoolsGetSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ReplicapoolPoolsGetSecurityOption4.prototype, "oauth2c", void 0);
    return ReplicapoolPoolsGetSecurityOption4;
}(utils_1.SpeakeasyBase));
exports.ReplicapoolPoolsGetSecurityOption4 = ReplicapoolPoolsGetSecurityOption4;
var ReplicapoolPoolsGetSecurityOption5 = /** @class */ (function (_super) {
    __extends(ReplicapoolPoolsGetSecurityOption5, _super);
    function ReplicapoolPoolsGetSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ReplicapoolPoolsGetSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ReplicapoolPoolsGetSecurityOption5.prototype, "oauth2c", void 0);
    return ReplicapoolPoolsGetSecurityOption5;
}(utils_1.SpeakeasyBase));
exports.ReplicapoolPoolsGetSecurityOption5 = ReplicapoolPoolsGetSecurityOption5;
var ReplicapoolPoolsGetSecurityOption6 = /** @class */ (function (_super) {
    __extends(ReplicapoolPoolsGetSecurityOption6, _super);
    function ReplicapoolPoolsGetSecurityOption6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ReplicapoolPoolsGetSecurityOption6.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ReplicapoolPoolsGetSecurityOption6.prototype, "oauth2c", void 0);
    return ReplicapoolPoolsGetSecurityOption6;
}(utils_1.SpeakeasyBase));
exports.ReplicapoolPoolsGetSecurityOption6 = ReplicapoolPoolsGetSecurityOption6;
var ReplicapoolPoolsGetSecurity = /** @class */ (function (_super) {
    __extends(ReplicapoolPoolsGetSecurity, _super);
    function ReplicapoolPoolsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", ReplicapoolPoolsGetSecurityOption1)
    ], ReplicapoolPoolsGetSecurity.prototype, "option1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", ReplicapoolPoolsGetSecurityOption2)
    ], ReplicapoolPoolsGetSecurity.prototype, "option2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", ReplicapoolPoolsGetSecurityOption3)
    ], ReplicapoolPoolsGetSecurity.prototype, "option3", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", ReplicapoolPoolsGetSecurityOption4)
    ], ReplicapoolPoolsGetSecurity.prototype, "option4", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", ReplicapoolPoolsGetSecurityOption5)
    ], ReplicapoolPoolsGetSecurity.prototype, "option5", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, option=true" }),
        __metadata("design:type", ReplicapoolPoolsGetSecurityOption6)
    ], ReplicapoolPoolsGetSecurity.prototype, "option6", void 0);
    return ReplicapoolPoolsGetSecurity;
}(utils_1.SpeakeasyBase));
exports.ReplicapoolPoolsGetSecurity = ReplicapoolPoolsGetSecurity;
var ReplicapoolPoolsGetRequest = /** @class */ (function (_super) {
    __extends(ReplicapoolPoolsGetRequest, _super);
    function ReplicapoolPoolsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ReplicapoolPoolsGetPathParams)
    ], ReplicapoolPoolsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ReplicapoolPoolsGetQueryParams)
    ], ReplicapoolPoolsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ReplicapoolPoolsGetSecurity)
    ], ReplicapoolPoolsGetRequest.prototype, "security", void 0);
    return ReplicapoolPoolsGetRequest;
}(utils_1.SpeakeasyBase));
exports.ReplicapoolPoolsGetRequest = ReplicapoolPoolsGetRequest;
var ReplicapoolPoolsGetResponse = /** @class */ (function (_super) {
    __extends(ReplicapoolPoolsGetResponse, _super);
    function ReplicapoolPoolsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], ReplicapoolPoolsGetResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ReplicapoolPoolsGetResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ReplicapoolPoolsGetResponse.prototype, "statusCode", void 0);
    return ReplicapoolPoolsGetResponse;
}(utils_1.SpeakeasyBase));
exports.ReplicapoolPoolsGetResponse = ReplicapoolPoolsGetResponse;
