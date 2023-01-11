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
exports.PutTargetsTargetIdFindingsIdIntegrationsJiraCloudResponse = exports.PutTargetsTargetIdFindingsIdIntegrationsJiraCloudRequest = exports.PutTargetsTargetIdFindingsIdIntegrationsJiraCloud404ApplicationJson = exports.PutTargetsTargetIdFindingsIdIntegrationsJiraCloud403ApplicationJson = exports.PutTargetsTargetIdFindingsIdIntegrationsJiraCloud401ApplicationJson = exports.PutTargetsTargetIdFindingsIdIntegrationsJiraCloudPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PutTargetsTargetIdFindingsIdIntegrationsJiraCloudPathParams = /** @class */ (function (_super) {
    __extends(PutTargetsTargetIdFindingsIdIntegrationsJiraCloudPathParams, _super);
    function PutTargetsTargetIdFindingsIdIntegrationsJiraCloudPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PutTargetsTargetIdFindingsIdIntegrationsJiraCloudPathParams.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=target_id" }),
        __metadata("design:type", String)
    ], PutTargetsTargetIdFindingsIdIntegrationsJiraCloudPathParams.prototype, "targetId", void 0);
    return PutTargetsTargetIdFindingsIdIntegrationsJiraCloudPathParams;
}(utils_1.SpeakeasyBase));
exports.PutTargetsTargetIdFindingsIdIntegrationsJiraCloudPathParams = PutTargetsTargetIdFindingsIdIntegrationsJiraCloudPathParams;
var PutTargetsTargetIdFindingsIdIntegrationsJiraCloud401ApplicationJson = /** @class */ (function (_super) {
    __extends(PutTargetsTargetIdFindingsIdIntegrationsJiraCloud401ApplicationJson, _super);
    function PutTargetsTargetIdFindingsIdIntegrationsJiraCloud401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], PutTargetsTargetIdFindingsIdIntegrationsJiraCloud401ApplicationJson.prototype, "detail", void 0);
    return PutTargetsTargetIdFindingsIdIntegrationsJiraCloud401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PutTargetsTargetIdFindingsIdIntegrationsJiraCloud401ApplicationJson = PutTargetsTargetIdFindingsIdIntegrationsJiraCloud401ApplicationJson;
var PutTargetsTargetIdFindingsIdIntegrationsJiraCloud403ApplicationJson = /** @class */ (function (_super) {
    __extends(PutTargetsTargetIdFindingsIdIntegrationsJiraCloud403ApplicationJson, _super);
    function PutTargetsTargetIdFindingsIdIntegrationsJiraCloud403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], PutTargetsTargetIdFindingsIdIntegrationsJiraCloud403ApplicationJson.prototype, "detail", void 0);
    return PutTargetsTargetIdFindingsIdIntegrationsJiraCloud403ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PutTargetsTargetIdFindingsIdIntegrationsJiraCloud403ApplicationJson = PutTargetsTargetIdFindingsIdIntegrationsJiraCloud403ApplicationJson;
var PutTargetsTargetIdFindingsIdIntegrationsJiraCloud404ApplicationJson = /** @class */ (function (_super) {
    __extends(PutTargetsTargetIdFindingsIdIntegrationsJiraCloud404ApplicationJson, _super);
    function PutTargetsTargetIdFindingsIdIntegrationsJiraCloud404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], PutTargetsTargetIdFindingsIdIntegrationsJiraCloud404ApplicationJson.prototype, "detail", void 0);
    return PutTargetsTargetIdFindingsIdIntegrationsJiraCloud404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PutTargetsTargetIdFindingsIdIntegrationsJiraCloud404ApplicationJson = PutTargetsTargetIdFindingsIdIntegrationsJiraCloud404ApplicationJson;
var PutTargetsTargetIdFindingsIdIntegrationsJiraCloudRequest = /** @class */ (function (_super) {
    __extends(PutTargetsTargetIdFindingsIdIntegrationsJiraCloudRequest, _super);
    function PutTargetsTargetIdFindingsIdIntegrationsJiraCloudRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PutTargetsTargetIdFindingsIdIntegrationsJiraCloudPathParams)
    ], PutTargetsTargetIdFindingsIdIntegrationsJiraCloudRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.JiraFinding)
    ], PutTargetsTargetIdFindingsIdIntegrationsJiraCloudRequest.prototype, "request", void 0);
    return PutTargetsTargetIdFindingsIdIntegrationsJiraCloudRequest;
}(utils_1.SpeakeasyBase));
exports.PutTargetsTargetIdFindingsIdIntegrationsJiraCloudRequest = PutTargetsTargetIdFindingsIdIntegrationsJiraCloudRequest;
var PutTargetsTargetIdFindingsIdIntegrationsJiraCloudResponse = /** @class */ (function (_super) {
    __extends(PutTargetsTargetIdFindingsIdIntegrationsJiraCloudResponse, _super);
    function PutTargetsTargetIdFindingsIdIntegrationsJiraCloudResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PutTargetsTargetIdFindingsIdIntegrationsJiraCloudResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.JiraFinding)
    ], PutTargetsTargetIdFindingsIdIntegrationsJiraCloudResponse.prototype, "jiraFinding", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PutTargetsTargetIdFindingsIdIntegrationsJiraCloudResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PutTargetsTargetIdFindingsIdIntegrationsJiraCloud401ApplicationJson)
    ], PutTargetsTargetIdFindingsIdIntegrationsJiraCloudResponse.prototype, "putTargetsTargetIdFindingsIdIntegrationsJiraCloud401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PutTargetsTargetIdFindingsIdIntegrationsJiraCloud403ApplicationJson)
    ], PutTargetsTargetIdFindingsIdIntegrationsJiraCloudResponse.prototype, "putTargetsTargetIdFindingsIdIntegrationsJiraCloud403ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PutTargetsTargetIdFindingsIdIntegrationsJiraCloud404ApplicationJson)
    ], PutTargetsTargetIdFindingsIdIntegrationsJiraCloudResponse.prototype, "putTargetsTargetIdFindingsIdIntegrationsJiraCloud404ApplicationJSONObject", void 0);
    return PutTargetsTargetIdFindingsIdIntegrationsJiraCloudResponse;
}(utils_1.SpeakeasyBase));
exports.PutTargetsTargetIdFindingsIdIntegrationsJiraCloudResponse = PutTargetsTargetIdFindingsIdIntegrationsJiraCloudResponse;
