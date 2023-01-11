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
exports.PutTargetsTargetIdFindingsIdIntegrationsJiraServerResponse = exports.PutTargetsTargetIdFindingsIdIntegrationsJiraServerRequest = exports.PutTargetsTargetIdFindingsIdIntegrationsJiraServer404ApplicationJson = exports.PutTargetsTargetIdFindingsIdIntegrationsJiraServer403ApplicationJson = exports.PutTargetsTargetIdFindingsIdIntegrationsJiraServer401ApplicationJson = exports.PutTargetsTargetIdFindingsIdIntegrationsJiraServerPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PutTargetsTargetIdFindingsIdIntegrationsJiraServerPathParams = /** @class */ (function (_super) {
    __extends(PutTargetsTargetIdFindingsIdIntegrationsJiraServerPathParams, _super);
    function PutTargetsTargetIdFindingsIdIntegrationsJiraServerPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PutTargetsTargetIdFindingsIdIntegrationsJiraServerPathParams.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=target_id" }),
        __metadata("design:type", String)
    ], PutTargetsTargetIdFindingsIdIntegrationsJiraServerPathParams.prototype, "targetId", void 0);
    return PutTargetsTargetIdFindingsIdIntegrationsJiraServerPathParams;
}(utils_1.SpeakeasyBase));
exports.PutTargetsTargetIdFindingsIdIntegrationsJiraServerPathParams = PutTargetsTargetIdFindingsIdIntegrationsJiraServerPathParams;
var PutTargetsTargetIdFindingsIdIntegrationsJiraServer401ApplicationJson = /** @class */ (function (_super) {
    __extends(PutTargetsTargetIdFindingsIdIntegrationsJiraServer401ApplicationJson, _super);
    function PutTargetsTargetIdFindingsIdIntegrationsJiraServer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], PutTargetsTargetIdFindingsIdIntegrationsJiraServer401ApplicationJson.prototype, "detail", void 0);
    return PutTargetsTargetIdFindingsIdIntegrationsJiraServer401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PutTargetsTargetIdFindingsIdIntegrationsJiraServer401ApplicationJson = PutTargetsTargetIdFindingsIdIntegrationsJiraServer401ApplicationJson;
var PutTargetsTargetIdFindingsIdIntegrationsJiraServer403ApplicationJson = /** @class */ (function (_super) {
    __extends(PutTargetsTargetIdFindingsIdIntegrationsJiraServer403ApplicationJson, _super);
    function PutTargetsTargetIdFindingsIdIntegrationsJiraServer403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], PutTargetsTargetIdFindingsIdIntegrationsJiraServer403ApplicationJson.prototype, "detail", void 0);
    return PutTargetsTargetIdFindingsIdIntegrationsJiraServer403ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PutTargetsTargetIdFindingsIdIntegrationsJiraServer403ApplicationJson = PutTargetsTargetIdFindingsIdIntegrationsJiraServer403ApplicationJson;
var PutTargetsTargetIdFindingsIdIntegrationsJiraServer404ApplicationJson = /** @class */ (function (_super) {
    __extends(PutTargetsTargetIdFindingsIdIntegrationsJiraServer404ApplicationJson, _super);
    function PutTargetsTargetIdFindingsIdIntegrationsJiraServer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], PutTargetsTargetIdFindingsIdIntegrationsJiraServer404ApplicationJson.prototype, "detail", void 0);
    return PutTargetsTargetIdFindingsIdIntegrationsJiraServer404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PutTargetsTargetIdFindingsIdIntegrationsJiraServer404ApplicationJson = PutTargetsTargetIdFindingsIdIntegrationsJiraServer404ApplicationJson;
var PutTargetsTargetIdFindingsIdIntegrationsJiraServerRequest = /** @class */ (function (_super) {
    __extends(PutTargetsTargetIdFindingsIdIntegrationsJiraServerRequest, _super);
    function PutTargetsTargetIdFindingsIdIntegrationsJiraServerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PutTargetsTargetIdFindingsIdIntegrationsJiraServerPathParams)
    ], PutTargetsTargetIdFindingsIdIntegrationsJiraServerRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.JiraFinding)
    ], PutTargetsTargetIdFindingsIdIntegrationsJiraServerRequest.prototype, "request", void 0);
    return PutTargetsTargetIdFindingsIdIntegrationsJiraServerRequest;
}(utils_1.SpeakeasyBase));
exports.PutTargetsTargetIdFindingsIdIntegrationsJiraServerRequest = PutTargetsTargetIdFindingsIdIntegrationsJiraServerRequest;
var PutTargetsTargetIdFindingsIdIntegrationsJiraServerResponse = /** @class */ (function (_super) {
    __extends(PutTargetsTargetIdFindingsIdIntegrationsJiraServerResponse, _super);
    function PutTargetsTargetIdFindingsIdIntegrationsJiraServerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PutTargetsTargetIdFindingsIdIntegrationsJiraServerResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.JiraFinding)
    ], PutTargetsTargetIdFindingsIdIntegrationsJiraServerResponse.prototype, "jiraFinding", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PutTargetsTargetIdFindingsIdIntegrationsJiraServerResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PutTargetsTargetIdFindingsIdIntegrationsJiraServer401ApplicationJson)
    ], PutTargetsTargetIdFindingsIdIntegrationsJiraServerResponse.prototype, "putTargetsTargetIdFindingsIdIntegrationsJiraServer401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PutTargetsTargetIdFindingsIdIntegrationsJiraServer403ApplicationJson)
    ], PutTargetsTargetIdFindingsIdIntegrationsJiraServerResponse.prototype, "putTargetsTargetIdFindingsIdIntegrationsJiraServer403ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PutTargetsTargetIdFindingsIdIntegrationsJiraServer404ApplicationJson)
    ], PutTargetsTargetIdFindingsIdIntegrationsJiraServerResponse.prototype, "putTargetsTargetIdFindingsIdIntegrationsJiraServer404ApplicationJSONObject", void 0);
    return PutTargetsTargetIdFindingsIdIntegrationsJiraServerResponse;
}(utils_1.SpeakeasyBase));
exports.PutTargetsTargetIdFindingsIdIntegrationsJiraServerResponse = PutTargetsTargetIdFindingsIdIntegrationsJiraServerResponse;
