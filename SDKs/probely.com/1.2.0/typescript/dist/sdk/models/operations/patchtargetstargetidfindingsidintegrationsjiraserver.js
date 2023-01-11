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
exports.PatchTargetsTargetIdFindingsIdIntegrationsJiraServerResponse = exports.PatchTargetsTargetIdFindingsIdIntegrationsJiraServerRequest = exports.PatchTargetsTargetIdFindingsIdIntegrationsJiraServer404ApplicationJson = exports.PatchTargetsTargetIdFindingsIdIntegrationsJiraServer403ApplicationJson = exports.PatchTargetsTargetIdFindingsIdIntegrationsJiraServer401ApplicationJson = exports.PatchTargetsTargetIdFindingsIdIntegrationsJiraServerPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PatchTargetsTargetIdFindingsIdIntegrationsJiraServerPathParams = /** @class */ (function (_super) {
    __extends(PatchTargetsTargetIdFindingsIdIntegrationsJiraServerPathParams, _super);
    function PatchTargetsTargetIdFindingsIdIntegrationsJiraServerPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PatchTargetsTargetIdFindingsIdIntegrationsJiraServerPathParams.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=target_id" }),
        __metadata("design:type", String)
    ], PatchTargetsTargetIdFindingsIdIntegrationsJiraServerPathParams.prototype, "targetId", void 0);
    return PatchTargetsTargetIdFindingsIdIntegrationsJiraServerPathParams;
}(utils_1.SpeakeasyBase));
exports.PatchTargetsTargetIdFindingsIdIntegrationsJiraServerPathParams = PatchTargetsTargetIdFindingsIdIntegrationsJiraServerPathParams;
var PatchTargetsTargetIdFindingsIdIntegrationsJiraServer401ApplicationJson = /** @class */ (function (_super) {
    __extends(PatchTargetsTargetIdFindingsIdIntegrationsJiraServer401ApplicationJson, _super);
    function PatchTargetsTargetIdFindingsIdIntegrationsJiraServer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], PatchTargetsTargetIdFindingsIdIntegrationsJiraServer401ApplicationJson.prototype, "detail", void 0);
    return PatchTargetsTargetIdFindingsIdIntegrationsJiraServer401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PatchTargetsTargetIdFindingsIdIntegrationsJiraServer401ApplicationJson = PatchTargetsTargetIdFindingsIdIntegrationsJiraServer401ApplicationJson;
var PatchTargetsTargetIdFindingsIdIntegrationsJiraServer403ApplicationJson = /** @class */ (function (_super) {
    __extends(PatchTargetsTargetIdFindingsIdIntegrationsJiraServer403ApplicationJson, _super);
    function PatchTargetsTargetIdFindingsIdIntegrationsJiraServer403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], PatchTargetsTargetIdFindingsIdIntegrationsJiraServer403ApplicationJson.prototype, "detail", void 0);
    return PatchTargetsTargetIdFindingsIdIntegrationsJiraServer403ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PatchTargetsTargetIdFindingsIdIntegrationsJiraServer403ApplicationJson = PatchTargetsTargetIdFindingsIdIntegrationsJiraServer403ApplicationJson;
var PatchTargetsTargetIdFindingsIdIntegrationsJiraServer404ApplicationJson = /** @class */ (function (_super) {
    __extends(PatchTargetsTargetIdFindingsIdIntegrationsJiraServer404ApplicationJson, _super);
    function PatchTargetsTargetIdFindingsIdIntegrationsJiraServer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], PatchTargetsTargetIdFindingsIdIntegrationsJiraServer404ApplicationJson.prototype, "detail", void 0);
    return PatchTargetsTargetIdFindingsIdIntegrationsJiraServer404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PatchTargetsTargetIdFindingsIdIntegrationsJiraServer404ApplicationJson = PatchTargetsTargetIdFindingsIdIntegrationsJiraServer404ApplicationJson;
var PatchTargetsTargetIdFindingsIdIntegrationsJiraServerRequest = /** @class */ (function (_super) {
    __extends(PatchTargetsTargetIdFindingsIdIntegrationsJiraServerRequest, _super);
    function PatchTargetsTargetIdFindingsIdIntegrationsJiraServerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PatchTargetsTargetIdFindingsIdIntegrationsJiraServerPathParams)
    ], PatchTargetsTargetIdFindingsIdIntegrationsJiraServerRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.JiraFinding)
    ], PatchTargetsTargetIdFindingsIdIntegrationsJiraServerRequest.prototype, "request", void 0);
    return PatchTargetsTargetIdFindingsIdIntegrationsJiraServerRequest;
}(utils_1.SpeakeasyBase));
exports.PatchTargetsTargetIdFindingsIdIntegrationsJiraServerRequest = PatchTargetsTargetIdFindingsIdIntegrationsJiraServerRequest;
var PatchTargetsTargetIdFindingsIdIntegrationsJiraServerResponse = /** @class */ (function (_super) {
    __extends(PatchTargetsTargetIdFindingsIdIntegrationsJiraServerResponse, _super);
    function PatchTargetsTargetIdFindingsIdIntegrationsJiraServerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PatchTargetsTargetIdFindingsIdIntegrationsJiraServerResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.JiraFinding)
    ], PatchTargetsTargetIdFindingsIdIntegrationsJiraServerResponse.prototype, "jiraFinding", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PatchTargetsTargetIdFindingsIdIntegrationsJiraServerResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PatchTargetsTargetIdFindingsIdIntegrationsJiraServer401ApplicationJson)
    ], PatchTargetsTargetIdFindingsIdIntegrationsJiraServerResponse.prototype, "patchTargetsTargetIdFindingsIdIntegrationsJiraServer401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PatchTargetsTargetIdFindingsIdIntegrationsJiraServer403ApplicationJson)
    ], PatchTargetsTargetIdFindingsIdIntegrationsJiraServerResponse.prototype, "patchTargetsTargetIdFindingsIdIntegrationsJiraServer403ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PatchTargetsTargetIdFindingsIdIntegrationsJiraServer404ApplicationJson)
    ], PatchTargetsTargetIdFindingsIdIntegrationsJiraServerResponse.prototype, "patchTargetsTargetIdFindingsIdIntegrationsJiraServer404ApplicationJSONObject", void 0);
    return PatchTargetsTargetIdFindingsIdIntegrationsJiraServerResponse;
}(utils_1.SpeakeasyBase));
exports.PatchTargetsTargetIdFindingsIdIntegrationsJiraServerResponse = PatchTargetsTargetIdFindingsIdIntegrationsJiraServerResponse;
