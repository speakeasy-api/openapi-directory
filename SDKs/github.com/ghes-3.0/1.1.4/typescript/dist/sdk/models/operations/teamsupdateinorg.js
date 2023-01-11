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
exports.TeamsUpdateInOrgResponse = exports.TeamsUpdateInOrgRequest = exports.TeamsUpdateInOrgRequestBody = exports.TeamsUpdateInOrgRequestBodyPrivacyEnum = exports.TeamsUpdateInOrgRequestBodyPermissionEnum = exports.TeamsUpdateInOrgPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var TeamsUpdateInOrgPathParams = /** @class */ (function (_super) {
    __extends(TeamsUpdateInOrgPathParams, _super);
    function TeamsUpdateInOrgPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=org" }),
        __metadata("design:type", String)
    ], TeamsUpdateInOrgPathParams.prototype, "org", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=team_slug" }),
        __metadata("design:type", String)
    ], TeamsUpdateInOrgPathParams.prototype, "teamSlug", void 0);
    return TeamsUpdateInOrgPathParams;
}(utils_1.SpeakeasyBase));
exports.TeamsUpdateInOrgPathParams = TeamsUpdateInOrgPathParams;
var TeamsUpdateInOrgRequestBodyPermissionEnum;
(function (TeamsUpdateInOrgRequestBodyPermissionEnum) {
    TeamsUpdateInOrgRequestBodyPermissionEnum["Pull"] = "pull";
    TeamsUpdateInOrgRequestBodyPermissionEnum["Push"] = "push";
    TeamsUpdateInOrgRequestBodyPermissionEnum["Admin"] = "admin";
})(TeamsUpdateInOrgRequestBodyPermissionEnum = exports.TeamsUpdateInOrgRequestBodyPermissionEnum || (exports.TeamsUpdateInOrgRequestBodyPermissionEnum = {}));
var TeamsUpdateInOrgRequestBodyPrivacyEnum;
(function (TeamsUpdateInOrgRequestBodyPrivacyEnum) {
    TeamsUpdateInOrgRequestBodyPrivacyEnum["Secret"] = "secret";
    TeamsUpdateInOrgRequestBodyPrivacyEnum["Closed"] = "closed";
})(TeamsUpdateInOrgRequestBodyPrivacyEnum = exports.TeamsUpdateInOrgRequestBodyPrivacyEnum || (exports.TeamsUpdateInOrgRequestBodyPrivacyEnum = {}));
var TeamsUpdateInOrgRequestBody = /** @class */ (function (_super) {
    __extends(TeamsUpdateInOrgRequestBody, _super);
    function TeamsUpdateInOrgRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], TeamsUpdateInOrgRequestBody.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], TeamsUpdateInOrgRequestBody.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=parent_team_id" }),
        __metadata("design:type", Number)
    ], TeamsUpdateInOrgRequestBody.prototype, "parentTeamId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=permission" }),
        __metadata("design:type", String)
    ], TeamsUpdateInOrgRequestBody.prototype, "permission", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=privacy" }),
        __metadata("design:type", String)
    ], TeamsUpdateInOrgRequestBody.prototype, "privacy", void 0);
    return TeamsUpdateInOrgRequestBody;
}(utils_1.SpeakeasyBase));
exports.TeamsUpdateInOrgRequestBody = TeamsUpdateInOrgRequestBody;
var TeamsUpdateInOrgRequest = /** @class */ (function (_super) {
    __extends(TeamsUpdateInOrgRequest, _super);
    function TeamsUpdateInOrgRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", TeamsUpdateInOrgPathParams)
    ], TeamsUpdateInOrgRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", TeamsUpdateInOrgRequestBody)
    ], TeamsUpdateInOrgRequest.prototype, "request", void 0);
    return TeamsUpdateInOrgRequest;
}(utils_1.SpeakeasyBase));
exports.TeamsUpdateInOrgRequest = TeamsUpdateInOrgRequest;
var TeamsUpdateInOrgResponse = /** @class */ (function (_super) {
    __extends(TeamsUpdateInOrgResponse, _super);
    function TeamsUpdateInOrgResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], TeamsUpdateInOrgResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], TeamsUpdateInOrgResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.TeamFull)
    ], TeamsUpdateInOrgResponse.prototype, "teamFull", void 0);
    return TeamsUpdateInOrgResponse;
}(utils_1.SpeakeasyBase));
exports.TeamsUpdateInOrgResponse = TeamsUpdateInOrgResponse;
