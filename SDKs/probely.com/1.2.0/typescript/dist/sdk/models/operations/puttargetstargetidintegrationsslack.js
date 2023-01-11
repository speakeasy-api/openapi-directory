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
exports.PutTargetsTargetIdIntegrationsSlackResponse = exports.PutTargetsTargetIdIntegrationsSlackRequest = exports.PutTargetsTargetIdIntegrationsSlack404ApplicationJson = exports.PutTargetsTargetIdIntegrationsSlack403ApplicationJson = exports.PutTargetsTargetIdIntegrationsSlack401ApplicationJson = exports.PutTargetsTargetIdIntegrationsSlackPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PutTargetsTargetIdIntegrationsSlackPathParams = /** @class */ (function (_super) {
    __extends(PutTargetsTargetIdIntegrationsSlackPathParams, _super);
    function PutTargetsTargetIdIntegrationsSlackPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=target_id" }),
        __metadata("design:type", String)
    ], PutTargetsTargetIdIntegrationsSlackPathParams.prototype, "targetId", void 0);
    return PutTargetsTargetIdIntegrationsSlackPathParams;
}(utils_1.SpeakeasyBase));
exports.PutTargetsTargetIdIntegrationsSlackPathParams = PutTargetsTargetIdIntegrationsSlackPathParams;
var PutTargetsTargetIdIntegrationsSlack401ApplicationJson = /** @class */ (function (_super) {
    __extends(PutTargetsTargetIdIntegrationsSlack401ApplicationJson, _super);
    function PutTargetsTargetIdIntegrationsSlack401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], PutTargetsTargetIdIntegrationsSlack401ApplicationJson.prototype, "detail", void 0);
    return PutTargetsTargetIdIntegrationsSlack401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PutTargetsTargetIdIntegrationsSlack401ApplicationJson = PutTargetsTargetIdIntegrationsSlack401ApplicationJson;
var PutTargetsTargetIdIntegrationsSlack403ApplicationJson = /** @class */ (function (_super) {
    __extends(PutTargetsTargetIdIntegrationsSlack403ApplicationJson, _super);
    function PutTargetsTargetIdIntegrationsSlack403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], PutTargetsTargetIdIntegrationsSlack403ApplicationJson.prototype, "detail", void 0);
    return PutTargetsTargetIdIntegrationsSlack403ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PutTargetsTargetIdIntegrationsSlack403ApplicationJson = PutTargetsTargetIdIntegrationsSlack403ApplicationJson;
var PutTargetsTargetIdIntegrationsSlack404ApplicationJson = /** @class */ (function (_super) {
    __extends(PutTargetsTargetIdIntegrationsSlack404ApplicationJson, _super);
    function PutTargetsTargetIdIntegrationsSlack404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], PutTargetsTargetIdIntegrationsSlack404ApplicationJson.prototype, "detail", void 0);
    return PutTargetsTargetIdIntegrationsSlack404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PutTargetsTargetIdIntegrationsSlack404ApplicationJson = PutTargetsTargetIdIntegrationsSlack404ApplicationJson;
var PutTargetsTargetIdIntegrationsSlackRequest = /** @class */ (function (_super) {
    __extends(PutTargetsTargetIdIntegrationsSlackRequest, _super);
    function PutTargetsTargetIdIntegrationsSlackRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PutTargetsTargetIdIntegrationsSlackPathParams)
    ], PutTargetsTargetIdIntegrationsSlackRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Slack)
    ], PutTargetsTargetIdIntegrationsSlackRequest.prototype, "request", void 0);
    return PutTargetsTargetIdIntegrationsSlackRequest;
}(utils_1.SpeakeasyBase));
exports.PutTargetsTargetIdIntegrationsSlackRequest = PutTargetsTargetIdIntegrationsSlackRequest;
var PutTargetsTargetIdIntegrationsSlackResponse = /** @class */ (function (_super) {
    __extends(PutTargetsTargetIdIntegrationsSlackResponse, _super);
    function PutTargetsTargetIdIntegrationsSlackResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PutTargetsTargetIdIntegrationsSlackResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Slack)
    ], PutTargetsTargetIdIntegrationsSlackResponse.prototype, "slack", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PutTargetsTargetIdIntegrationsSlackResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PutTargetsTargetIdIntegrationsSlack401ApplicationJson)
    ], PutTargetsTargetIdIntegrationsSlackResponse.prototype, "putTargetsTargetIdIntegrationsSlack401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PutTargetsTargetIdIntegrationsSlack403ApplicationJson)
    ], PutTargetsTargetIdIntegrationsSlackResponse.prototype, "putTargetsTargetIdIntegrationsSlack403ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PutTargetsTargetIdIntegrationsSlack404ApplicationJson)
    ], PutTargetsTargetIdIntegrationsSlackResponse.prototype, "putTargetsTargetIdIntegrationsSlack404ApplicationJSONObject", void 0);
    return PutTargetsTargetIdIntegrationsSlackResponse;
}(utils_1.SpeakeasyBase));
exports.PutTargetsTargetIdIntegrationsSlackResponse = PutTargetsTargetIdIntegrationsSlackResponse;
