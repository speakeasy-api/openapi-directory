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
exports.ListRatePlanResponse = exports.ListRatePlanRequest = exports.ListRatePlanListRatePlanResponse = exports.ListRatePlanListRatePlanResponseMeta = exports.ListRatePlanSecurity = exports.ListRatePlanQueryParams = exports.ListRatePlanServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.ListRatePlanServerList = [
    "https://wireless.twilio.com",
];
var ListRatePlanQueryParams = /** @class */ (function (_super) {
    __extends(ListRatePlanQueryParams, _super);
    function ListRatePlanQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListRatePlanQueryParams.prototype, "pageSize", void 0);
    return ListRatePlanQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListRatePlanQueryParams = ListRatePlanQueryParams;
var ListRatePlanSecurity = /** @class */ (function (_super) {
    __extends(ListRatePlanSecurity, _super);
    function ListRatePlanSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListRatePlanSecurity.prototype, "accountSidAuthToken", void 0);
    return ListRatePlanSecurity;
}(utils_1.SpeakeasyBase));
exports.ListRatePlanSecurity = ListRatePlanSecurity;
var ListRatePlanListRatePlanResponseMeta = /** @class */ (function (_super) {
    __extends(ListRatePlanListRatePlanResponseMeta, _super);
    function ListRatePlanListRatePlanResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListRatePlanListRatePlanResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListRatePlanListRatePlanResponseMeta.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListRatePlanListRatePlanResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListRatePlanListRatePlanResponseMeta.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListRatePlanListRatePlanResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListRatePlanListRatePlanResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListRatePlanListRatePlanResponseMeta.prototype, "url", void 0);
    return ListRatePlanListRatePlanResponseMeta;
}(utils_1.SpeakeasyBase));
exports.ListRatePlanListRatePlanResponseMeta = ListRatePlanListRatePlanResponseMeta;
var ListRatePlanListRatePlanResponse = /** @class */ (function (_super) {
    __extends(ListRatePlanListRatePlanResponse, _super);
    function ListRatePlanListRatePlanResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListRatePlanListRatePlanResponseMeta)
    ], ListRatePlanListRatePlanResponse.prototype, "meta", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rate_plans", elemType: shared.WirelessV1RatePlan }),
        __metadata("design:type", Array)
    ], ListRatePlanListRatePlanResponse.prototype, "ratePlans", void 0);
    return ListRatePlanListRatePlanResponse;
}(utils_1.SpeakeasyBase));
exports.ListRatePlanListRatePlanResponse = ListRatePlanListRatePlanResponse;
var ListRatePlanRequest = /** @class */ (function (_super) {
    __extends(ListRatePlanRequest, _super);
    function ListRatePlanRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListRatePlanRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListRatePlanQueryParams)
    ], ListRatePlanRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListRatePlanSecurity)
    ], ListRatePlanRequest.prototype, "security", void 0);
    return ListRatePlanRequest;
}(utils_1.SpeakeasyBase));
exports.ListRatePlanRequest = ListRatePlanRequest;
var ListRatePlanResponse = /** @class */ (function (_super) {
    __extends(ListRatePlanResponse, _super);
    function ListRatePlanResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListRatePlanResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListRatePlanListRatePlanResponse)
    ], ListRatePlanResponse.prototype, "listRatePlanResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListRatePlanResponse.prototype, "statusCode", void 0);
    return ListRatePlanResponse;
}(utils_1.SpeakeasyBase));
exports.ListRatePlanResponse = ListRatePlanResponse;
