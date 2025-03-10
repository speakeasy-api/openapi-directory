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
exports.ListCallResponse = exports.ListCallRequest = exports.ListCallListCallResponse = exports.ListCallSecurity = exports.ListCallQueryParams = exports.ListCallPathParams = exports.ListCallServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.ListCallServerList = [
    "https://api.twilio.com",
];
var ListCallPathParams = /** @class */ (function (_super) {
    __extends(ListCallPathParams, _super);
    function ListCallPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], ListCallPathParams.prototype, "accountSid", void 0);
    return ListCallPathParams;
}(utils_1.SpeakeasyBase));
exports.ListCallPathParams = ListCallPathParams;
var ListCallQueryParams = /** @class */ (function (_super) {
    __extends(ListCallQueryParams, _super);
    function ListCallQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=EndTime" }),
        __metadata("design:type", Date)
    ], ListCallQueryParams.prototype, "endTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=EndTime<" }),
        __metadata("design:type", Date)
    ], ListCallQueryParams.prototype, "endTimeLessThan", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=EndTime>" }),
        __metadata("design:type", Date)
    ], ListCallQueryParams.prototype, "endTimeGreaterThan", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=From" }),
        __metadata("design:type", String)
    ], ListCallQueryParams.prototype, "from", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListCallQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=ParentCallSid" }),
        __metadata("design:type", String)
    ], ListCallQueryParams.prototype, "parentCallSid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=StartTime" }),
        __metadata("design:type", Date)
    ], ListCallQueryParams.prototype, "startTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=StartTime<" }),
        __metadata("design:type", Date)
    ], ListCallQueryParams.prototype, "startTimeLessThan", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=StartTime>" }),
        __metadata("design:type", Date)
    ], ListCallQueryParams.prototype, "startTimeGreaterThan", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Status" }),
        __metadata("design:type", String)
    ], ListCallQueryParams.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=To" }),
        __metadata("design:type", String)
    ], ListCallQueryParams.prototype, "to", void 0);
    return ListCallQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListCallQueryParams = ListCallQueryParams;
var ListCallSecurity = /** @class */ (function (_super) {
    __extends(ListCallSecurity, _super);
    function ListCallSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListCallSecurity.prototype, "accountSidAuthToken", void 0);
    return ListCallSecurity;
}(utils_1.SpeakeasyBase));
exports.ListCallSecurity = ListCallSecurity;
var ListCallListCallResponse = /** @class */ (function (_super) {
    __extends(ListCallListCallResponse, _super);
    function ListCallListCallResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=calls", elemType: shared.ApiV2010AccountCall }),
        __metadata("design:type", Array)
    ], ListCallListCallResponse.prototype, "calls", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=end" }),
        __metadata("design:type", Number)
    ], ListCallListCallResponse.prototype, "end", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_page_uri" }),
        __metadata("design:type", String)
    ], ListCallListCallResponse.prototype, "firstPageUri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_uri" }),
        __metadata("design:type", String)
    ], ListCallListCallResponse.prototype, "nextPageUri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListCallListCallResponse.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListCallListCallResponse.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous_page_uri" }),
        __metadata("design:type", String)
    ], ListCallListCallResponse.prototype, "previousPageUri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=start" }),
        __metadata("design:type", Number)
    ], ListCallListCallResponse.prototype, "start", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], ListCallListCallResponse.prototype, "uri", void 0);
    return ListCallListCallResponse;
}(utils_1.SpeakeasyBase));
exports.ListCallListCallResponse = ListCallListCallResponse;
var ListCallRequest = /** @class */ (function (_super) {
    __extends(ListCallRequest, _super);
    function ListCallRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListCallRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListCallPathParams)
    ], ListCallRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListCallQueryParams)
    ], ListCallRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListCallSecurity)
    ], ListCallRequest.prototype, "security", void 0);
    return ListCallRequest;
}(utils_1.SpeakeasyBase));
exports.ListCallRequest = ListCallRequest;
var ListCallResponse = /** @class */ (function (_super) {
    __extends(ListCallResponse, _super);
    function ListCallResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListCallResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListCallListCallResponse)
    ], ListCallResponse.prototype, "listCallResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListCallResponse.prototype, "statusCode", void 0);
    return ListCallResponse;
}(utils_1.SpeakeasyBase));
exports.ListCallResponse = ListCallResponse;
