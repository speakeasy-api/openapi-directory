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
exports.ListTaskReservationResponse = exports.ListTaskReservationRequest = exports.ListTaskReservationListTaskReservationResponse = exports.ListTaskReservationListTaskReservationResponseMeta = exports.ListTaskReservationSecurity = exports.ListTaskReservationQueryParams = exports.ListTaskReservationPathParams = exports.ListTaskReservationServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.ListTaskReservationServerList = [
    "https://taskrouter.twilio.com",
];
var ListTaskReservationPathParams = /** @class */ (function (_super) {
    __extends(ListTaskReservationPathParams, _super);
    function ListTaskReservationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=TaskSid" }),
        __metadata("design:type", String)
    ], ListTaskReservationPathParams.prototype, "taskSid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" }),
        __metadata("design:type", String)
    ], ListTaskReservationPathParams.prototype, "workspaceSid", void 0);
    return ListTaskReservationPathParams;
}(utils_1.SpeakeasyBase));
exports.ListTaskReservationPathParams = ListTaskReservationPathParams;
var ListTaskReservationQueryParams = /** @class */ (function (_super) {
    __extends(ListTaskReservationQueryParams, _super);
    function ListTaskReservationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListTaskReservationQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=ReservationStatus" }),
        __metadata("design:type", String)
    ], ListTaskReservationQueryParams.prototype, "reservationStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=WorkerSid" }),
        __metadata("design:type", String)
    ], ListTaskReservationQueryParams.prototype, "workerSid", void 0);
    return ListTaskReservationQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListTaskReservationQueryParams = ListTaskReservationQueryParams;
var ListTaskReservationSecurity = /** @class */ (function (_super) {
    __extends(ListTaskReservationSecurity, _super);
    function ListTaskReservationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListTaskReservationSecurity.prototype, "accountSidAuthToken", void 0);
    return ListTaskReservationSecurity;
}(utils_1.SpeakeasyBase));
exports.ListTaskReservationSecurity = ListTaskReservationSecurity;
var ListTaskReservationListTaskReservationResponseMeta = /** @class */ (function (_super) {
    __extends(ListTaskReservationListTaskReservationResponseMeta, _super);
    function ListTaskReservationListTaskReservationResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListTaskReservationListTaskReservationResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListTaskReservationListTaskReservationResponseMeta.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListTaskReservationListTaskReservationResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListTaskReservationListTaskReservationResponseMeta.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListTaskReservationListTaskReservationResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListTaskReservationListTaskReservationResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListTaskReservationListTaskReservationResponseMeta.prototype, "url", void 0);
    return ListTaskReservationListTaskReservationResponseMeta;
}(utils_1.SpeakeasyBase));
exports.ListTaskReservationListTaskReservationResponseMeta = ListTaskReservationListTaskReservationResponseMeta;
var ListTaskReservationListTaskReservationResponse = /** @class */ (function (_super) {
    __extends(ListTaskReservationListTaskReservationResponse, _super);
    function ListTaskReservationListTaskReservationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListTaskReservationListTaskReservationResponseMeta)
    ], ListTaskReservationListTaskReservationResponse.prototype, "meta", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=reservations", elemType: shared.TaskrouterV1WorkspaceTaskTaskReservation }),
        __metadata("design:type", Array)
    ], ListTaskReservationListTaskReservationResponse.prototype, "reservations", void 0);
    return ListTaskReservationListTaskReservationResponse;
}(utils_1.SpeakeasyBase));
exports.ListTaskReservationListTaskReservationResponse = ListTaskReservationListTaskReservationResponse;
var ListTaskReservationRequest = /** @class */ (function (_super) {
    __extends(ListTaskReservationRequest, _super);
    function ListTaskReservationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListTaskReservationRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListTaskReservationPathParams)
    ], ListTaskReservationRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListTaskReservationQueryParams)
    ], ListTaskReservationRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListTaskReservationSecurity)
    ], ListTaskReservationRequest.prototype, "security", void 0);
    return ListTaskReservationRequest;
}(utils_1.SpeakeasyBase));
exports.ListTaskReservationRequest = ListTaskReservationRequest;
var ListTaskReservationResponse = /** @class */ (function (_super) {
    __extends(ListTaskReservationResponse, _super);
    function ListTaskReservationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListTaskReservationResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListTaskReservationListTaskReservationResponse)
    ], ListTaskReservationResponse.prototype, "listTaskReservationResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListTaskReservationResponse.prototype, "statusCode", void 0);
    return ListTaskReservationResponse;
}(utils_1.SpeakeasyBase));
exports.ListTaskReservationResponse = ListTaskReservationResponse;
