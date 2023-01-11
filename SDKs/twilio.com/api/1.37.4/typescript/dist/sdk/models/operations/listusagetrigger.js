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
exports.ListUsageTriggerResponse = exports.ListUsageTriggerRequest = exports.ListUsageTriggerListUsageTriggerResponse = exports.ListUsageTriggerSecurity = exports.ListUsageTriggerQueryParams = exports.ListUsageTriggerPathParams = exports.ListUsageTriggerServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.ListUsageTriggerServerList = [
    "https://api.twilio.com",
];
var ListUsageTriggerPathParams = /** @class */ (function (_super) {
    __extends(ListUsageTriggerPathParams, _super);
    function ListUsageTriggerPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], ListUsageTriggerPathParams.prototype, "accountSid", void 0);
    return ListUsageTriggerPathParams;
}(utils_1.SpeakeasyBase));
exports.ListUsageTriggerPathParams = ListUsageTriggerPathParams;
var ListUsageTriggerQueryParams = /** @class */ (function (_super) {
    __extends(ListUsageTriggerQueryParams, _super);
    function ListUsageTriggerQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListUsageTriggerQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Recurring" }),
        __metadata("design:type", String)
    ], ListUsageTriggerQueryParams.prototype, "recurring", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=TriggerBy" }),
        __metadata("design:type", String)
    ], ListUsageTriggerQueryParams.prototype, "triggerBy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=UsageCategory" }),
        __metadata("design:type", String)
    ], ListUsageTriggerQueryParams.prototype, "usageCategory", void 0);
    return ListUsageTriggerQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListUsageTriggerQueryParams = ListUsageTriggerQueryParams;
var ListUsageTriggerSecurity = /** @class */ (function (_super) {
    __extends(ListUsageTriggerSecurity, _super);
    function ListUsageTriggerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListUsageTriggerSecurity.prototype, "accountSidAuthToken", void 0);
    return ListUsageTriggerSecurity;
}(utils_1.SpeakeasyBase));
exports.ListUsageTriggerSecurity = ListUsageTriggerSecurity;
var ListUsageTriggerListUsageTriggerResponse = /** @class */ (function (_super) {
    __extends(ListUsageTriggerListUsageTriggerResponse, _super);
    function ListUsageTriggerListUsageTriggerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=end" }),
        __metadata("design:type", Number)
    ], ListUsageTriggerListUsageTriggerResponse.prototype, "end", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_page_uri" }),
        __metadata("design:type", String)
    ], ListUsageTriggerListUsageTriggerResponse.prototype, "firstPageUri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_uri" }),
        __metadata("design:type", String)
    ], ListUsageTriggerListUsageTriggerResponse.prototype, "nextPageUri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListUsageTriggerListUsageTriggerResponse.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListUsageTriggerListUsageTriggerResponse.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous_page_uri" }),
        __metadata("design:type", String)
    ], ListUsageTriggerListUsageTriggerResponse.prototype, "previousPageUri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=start" }),
        __metadata("design:type", Number)
    ], ListUsageTriggerListUsageTriggerResponse.prototype, "start", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], ListUsageTriggerListUsageTriggerResponse.prototype, "uri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=usage_triggers", elemType: shared.ApiV2010AccountUsageUsageTrigger }),
        __metadata("design:type", Array)
    ], ListUsageTriggerListUsageTriggerResponse.prototype, "usageTriggers", void 0);
    return ListUsageTriggerListUsageTriggerResponse;
}(utils_1.SpeakeasyBase));
exports.ListUsageTriggerListUsageTriggerResponse = ListUsageTriggerListUsageTriggerResponse;
var ListUsageTriggerRequest = /** @class */ (function (_super) {
    __extends(ListUsageTriggerRequest, _super);
    function ListUsageTriggerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListUsageTriggerRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListUsageTriggerPathParams)
    ], ListUsageTriggerRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListUsageTriggerQueryParams)
    ], ListUsageTriggerRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListUsageTriggerSecurity)
    ], ListUsageTriggerRequest.prototype, "security", void 0);
    return ListUsageTriggerRequest;
}(utils_1.SpeakeasyBase));
exports.ListUsageTriggerRequest = ListUsageTriggerRequest;
var ListUsageTriggerResponse = /** @class */ (function (_super) {
    __extends(ListUsageTriggerResponse, _super);
    function ListUsageTriggerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListUsageTriggerResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListUsageTriggerListUsageTriggerResponse)
    ], ListUsageTriggerResponse.prototype, "listUsageTriggerResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListUsageTriggerResponse.prototype, "statusCode", void 0);
    return ListUsageTriggerResponse;
}(utils_1.SpeakeasyBase));
exports.ListUsageTriggerResponse = ListUsageTriggerResponse;
