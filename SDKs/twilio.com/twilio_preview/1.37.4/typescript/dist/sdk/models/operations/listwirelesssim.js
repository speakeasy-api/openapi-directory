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
exports.ListWirelessSimResponse = exports.ListWirelessSimRequest = exports.ListWirelessSimListWirelessSimResponse = exports.ListWirelessSimListWirelessSimResponseMeta = exports.ListWirelessSimSecurity = exports.ListWirelessSimQueryParams = exports.ListWirelessSimServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.ListWirelessSimServerList = [
    "https://preview.twilio.com",
];
var ListWirelessSimQueryParams = /** @class */ (function (_super) {
    __extends(ListWirelessSimQueryParams, _super);
    function ListWirelessSimQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=EId" }),
        __metadata("design:type", String)
    ], ListWirelessSimQueryParams.prototype, "eId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Iccid" }),
        __metadata("design:type", String)
    ], ListWirelessSimQueryParams.prototype, "iccid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListWirelessSimQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=RatePlan" }),
        __metadata("design:type", String)
    ], ListWirelessSimQueryParams.prototype, "ratePlan", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=SimRegistrationCode" }),
        __metadata("design:type", String)
    ], ListWirelessSimQueryParams.prototype, "simRegistrationCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Status" }),
        __metadata("design:type", String)
    ], ListWirelessSimQueryParams.prototype, "status", void 0);
    return ListWirelessSimQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListWirelessSimQueryParams = ListWirelessSimQueryParams;
var ListWirelessSimSecurity = /** @class */ (function (_super) {
    __extends(ListWirelessSimSecurity, _super);
    function ListWirelessSimSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListWirelessSimSecurity.prototype, "accountSidAuthToken", void 0);
    return ListWirelessSimSecurity;
}(utils_1.SpeakeasyBase));
exports.ListWirelessSimSecurity = ListWirelessSimSecurity;
var ListWirelessSimListWirelessSimResponseMeta = /** @class */ (function (_super) {
    __extends(ListWirelessSimListWirelessSimResponseMeta, _super);
    function ListWirelessSimListWirelessSimResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListWirelessSimListWirelessSimResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListWirelessSimListWirelessSimResponseMeta.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListWirelessSimListWirelessSimResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListWirelessSimListWirelessSimResponseMeta.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListWirelessSimListWirelessSimResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListWirelessSimListWirelessSimResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListWirelessSimListWirelessSimResponseMeta.prototype, "url", void 0);
    return ListWirelessSimListWirelessSimResponseMeta;
}(utils_1.SpeakeasyBase));
exports.ListWirelessSimListWirelessSimResponseMeta = ListWirelessSimListWirelessSimResponseMeta;
var ListWirelessSimListWirelessSimResponse = /** @class */ (function (_super) {
    __extends(ListWirelessSimListWirelessSimResponse, _super);
    function ListWirelessSimListWirelessSimResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListWirelessSimListWirelessSimResponseMeta)
    ], ListWirelessSimListWirelessSimResponse.prototype, "meta", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sims", elemType: shared.PreviewWirelessSim }),
        __metadata("design:type", Array)
    ], ListWirelessSimListWirelessSimResponse.prototype, "sims", void 0);
    return ListWirelessSimListWirelessSimResponse;
}(utils_1.SpeakeasyBase));
exports.ListWirelessSimListWirelessSimResponse = ListWirelessSimListWirelessSimResponse;
var ListWirelessSimRequest = /** @class */ (function (_super) {
    __extends(ListWirelessSimRequest, _super);
    function ListWirelessSimRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListWirelessSimRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListWirelessSimQueryParams)
    ], ListWirelessSimRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListWirelessSimSecurity)
    ], ListWirelessSimRequest.prototype, "security", void 0);
    return ListWirelessSimRequest;
}(utils_1.SpeakeasyBase));
exports.ListWirelessSimRequest = ListWirelessSimRequest;
var ListWirelessSimResponse = /** @class */ (function (_super) {
    __extends(ListWirelessSimResponse, _super);
    function ListWirelessSimResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListWirelessSimResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListWirelessSimListWirelessSimResponse)
    ], ListWirelessSimResponse.prototype, "listWirelessSimResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListWirelessSimResponse.prototype, "statusCode", void 0);
    return ListWirelessSimResponse;
}(utils_1.SpeakeasyBase));
exports.ListWirelessSimResponse = ListWirelessSimResponse;
