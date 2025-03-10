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
exports.ListAvailablePhoneNumberSharedCostResponse = exports.ListAvailablePhoneNumberSharedCostRequest = exports.ListAvailablePhoneNumberSharedCostListAvailablePhoneNumberSharedCostResponse = exports.ListAvailablePhoneNumberSharedCostSecurity = exports.ListAvailablePhoneNumberSharedCostQueryParams = exports.ListAvailablePhoneNumberSharedCostPathParams = exports.ListAvailablePhoneNumberSharedCostServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.ListAvailablePhoneNumberSharedCostServerList = [
    "https://api.twilio.com",
];
var ListAvailablePhoneNumberSharedCostPathParams = /** @class */ (function (_super) {
    __extends(ListAvailablePhoneNumberSharedCostPathParams, _super);
    function ListAvailablePhoneNumberSharedCostPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberSharedCostPathParams.prototype, "accountSid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=CountryCode" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberSharedCostPathParams.prototype, "countryCode", void 0);
    return ListAvailablePhoneNumberSharedCostPathParams;
}(utils_1.SpeakeasyBase));
exports.ListAvailablePhoneNumberSharedCostPathParams = ListAvailablePhoneNumberSharedCostPathParams;
var ListAvailablePhoneNumberSharedCostQueryParams = /** @class */ (function (_super) {
    __extends(ListAvailablePhoneNumberSharedCostQueryParams, _super);
    function ListAvailablePhoneNumberSharedCostQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=AreaCode" }),
        __metadata("design:type", Number)
    ], ListAvailablePhoneNumberSharedCostQueryParams.prototype, "areaCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Beta" }),
        __metadata("design:type", Boolean)
    ], ListAvailablePhoneNumberSharedCostQueryParams.prototype, "beta", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Contains" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberSharedCostQueryParams.prototype, "contains", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Distance" }),
        __metadata("design:type", Number)
    ], ListAvailablePhoneNumberSharedCostQueryParams.prototype, "distance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=ExcludeAllAddressRequired" }),
        __metadata("design:type", Boolean)
    ], ListAvailablePhoneNumberSharedCostQueryParams.prototype, "excludeAllAddressRequired", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=ExcludeForeignAddressRequired" }),
        __metadata("design:type", Boolean)
    ], ListAvailablePhoneNumberSharedCostQueryParams.prototype, "excludeForeignAddressRequired", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=ExcludeLocalAddressRequired" }),
        __metadata("design:type", Boolean)
    ], ListAvailablePhoneNumberSharedCostQueryParams.prototype, "excludeLocalAddressRequired", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=FaxEnabled" }),
        __metadata("design:type", Boolean)
    ], ListAvailablePhoneNumberSharedCostQueryParams.prototype, "faxEnabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=InLata" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberSharedCostQueryParams.prototype, "inLata", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=InLocality" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberSharedCostQueryParams.prototype, "inLocality", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=InPostalCode" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberSharedCostQueryParams.prototype, "inPostalCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=InRateCenter" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberSharedCostQueryParams.prototype, "inRateCenter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=InRegion" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberSharedCostQueryParams.prototype, "inRegion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=MmsEnabled" }),
        __metadata("design:type", Boolean)
    ], ListAvailablePhoneNumberSharedCostQueryParams.prototype, "mmsEnabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=NearLatLong" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberSharedCostQueryParams.prototype, "nearLatLong", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=NearNumber" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberSharedCostQueryParams.prototype, "nearNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListAvailablePhoneNumberSharedCostQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=SmsEnabled" }),
        __metadata("design:type", Boolean)
    ], ListAvailablePhoneNumberSharedCostQueryParams.prototype, "smsEnabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=VoiceEnabled" }),
        __metadata("design:type", Boolean)
    ], ListAvailablePhoneNumberSharedCostQueryParams.prototype, "voiceEnabled", void 0);
    return ListAvailablePhoneNumberSharedCostQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListAvailablePhoneNumberSharedCostQueryParams = ListAvailablePhoneNumberSharedCostQueryParams;
var ListAvailablePhoneNumberSharedCostSecurity = /** @class */ (function (_super) {
    __extends(ListAvailablePhoneNumberSharedCostSecurity, _super);
    function ListAvailablePhoneNumberSharedCostSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListAvailablePhoneNumberSharedCostSecurity.prototype, "accountSidAuthToken", void 0);
    return ListAvailablePhoneNumberSharedCostSecurity;
}(utils_1.SpeakeasyBase));
exports.ListAvailablePhoneNumberSharedCostSecurity = ListAvailablePhoneNumberSharedCostSecurity;
var ListAvailablePhoneNumberSharedCostListAvailablePhoneNumberSharedCostResponse = /** @class */ (function (_super) {
    __extends(ListAvailablePhoneNumberSharedCostListAvailablePhoneNumberSharedCostResponse, _super);
    function ListAvailablePhoneNumberSharedCostListAvailablePhoneNumberSharedCostResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=available_phone_numbers", elemType: shared.ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberSharedCost }),
        __metadata("design:type", Array)
    ], ListAvailablePhoneNumberSharedCostListAvailablePhoneNumberSharedCostResponse.prototype, "availablePhoneNumbers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=end" }),
        __metadata("design:type", Number)
    ], ListAvailablePhoneNumberSharedCostListAvailablePhoneNumberSharedCostResponse.prototype, "end", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_page_uri" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberSharedCostListAvailablePhoneNumberSharedCostResponse.prototype, "firstPageUri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_uri" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberSharedCostListAvailablePhoneNumberSharedCostResponse.prototype, "nextPageUri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListAvailablePhoneNumberSharedCostListAvailablePhoneNumberSharedCostResponse.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListAvailablePhoneNumberSharedCostListAvailablePhoneNumberSharedCostResponse.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous_page_uri" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberSharedCostListAvailablePhoneNumberSharedCostResponse.prototype, "previousPageUri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=start" }),
        __metadata("design:type", Number)
    ], ListAvailablePhoneNumberSharedCostListAvailablePhoneNumberSharedCostResponse.prototype, "start", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberSharedCostListAvailablePhoneNumberSharedCostResponse.prototype, "uri", void 0);
    return ListAvailablePhoneNumberSharedCostListAvailablePhoneNumberSharedCostResponse;
}(utils_1.SpeakeasyBase));
exports.ListAvailablePhoneNumberSharedCostListAvailablePhoneNumberSharedCostResponse = ListAvailablePhoneNumberSharedCostListAvailablePhoneNumberSharedCostResponse;
var ListAvailablePhoneNumberSharedCostRequest = /** @class */ (function (_super) {
    __extends(ListAvailablePhoneNumberSharedCostRequest, _super);
    function ListAvailablePhoneNumberSharedCostRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberSharedCostRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListAvailablePhoneNumberSharedCostPathParams)
    ], ListAvailablePhoneNumberSharedCostRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListAvailablePhoneNumberSharedCostQueryParams)
    ], ListAvailablePhoneNumberSharedCostRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListAvailablePhoneNumberSharedCostSecurity)
    ], ListAvailablePhoneNumberSharedCostRequest.prototype, "security", void 0);
    return ListAvailablePhoneNumberSharedCostRequest;
}(utils_1.SpeakeasyBase));
exports.ListAvailablePhoneNumberSharedCostRequest = ListAvailablePhoneNumberSharedCostRequest;
var ListAvailablePhoneNumberSharedCostResponse = /** @class */ (function (_super) {
    __extends(ListAvailablePhoneNumberSharedCostResponse, _super);
    function ListAvailablePhoneNumberSharedCostResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberSharedCostResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListAvailablePhoneNumberSharedCostListAvailablePhoneNumberSharedCostResponse)
    ], ListAvailablePhoneNumberSharedCostResponse.prototype, "listAvailablePhoneNumberSharedCostResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListAvailablePhoneNumberSharedCostResponse.prototype, "statusCode", void 0);
    return ListAvailablePhoneNumberSharedCostResponse;
}(utils_1.SpeakeasyBase));
exports.ListAvailablePhoneNumberSharedCostResponse = ListAvailablePhoneNumberSharedCostResponse;
