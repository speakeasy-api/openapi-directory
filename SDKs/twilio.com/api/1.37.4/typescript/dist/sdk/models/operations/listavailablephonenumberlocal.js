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
exports.ListAvailablePhoneNumberLocalResponse = exports.ListAvailablePhoneNumberLocalRequest = exports.ListAvailablePhoneNumberLocalListAvailablePhoneNumberLocalResponse = exports.ListAvailablePhoneNumberLocalSecurity = exports.ListAvailablePhoneNumberLocalQueryParams = exports.ListAvailablePhoneNumberLocalPathParams = exports.ListAvailablePhoneNumberLocalServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.ListAvailablePhoneNumberLocalServerList = [
    "https://api.twilio.com",
];
var ListAvailablePhoneNumberLocalPathParams = /** @class */ (function (_super) {
    __extends(ListAvailablePhoneNumberLocalPathParams, _super);
    function ListAvailablePhoneNumberLocalPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberLocalPathParams.prototype, "accountSid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=CountryCode" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberLocalPathParams.prototype, "countryCode", void 0);
    return ListAvailablePhoneNumberLocalPathParams;
}(utils_1.SpeakeasyBase));
exports.ListAvailablePhoneNumberLocalPathParams = ListAvailablePhoneNumberLocalPathParams;
var ListAvailablePhoneNumberLocalQueryParams = /** @class */ (function (_super) {
    __extends(ListAvailablePhoneNumberLocalQueryParams, _super);
    function ListAvailablePhoneNumberLocalQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=AreaCode" }),
        __metadata("design:type", Number)
    ], ListAvailablePhoneNumberLocalQueryParams.prototype, "areaCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Beta" }),
        __metadata("design:type", Boolean)
    ], ListAvailablePhoneNumberLocalQueryParams.prototype, "beta", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Contains" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberLocalQueryParams.prototype, "contains", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Distance" }),
        __metadata("design:type", Number)
    ], ListAvailablePhoneNumberLocalQueryParams.prototype, "distance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=ExcludeAllAddressRequired" }),
        __metadata("design:type", Boolean)
    ], ListAvailablePhoneNumberLocalQueryParams.prototype, "excludeAllAddressRequired", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=ExcludeForeignAddressRequired" }),
        __metadata("design:type", Boolean)
    ], ListAvailablePhoneNumberLocalQueryParams.prototype, "excludeForeignAddressRequired", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=ExcludeLocalAddressRequired" }),
        __metadata("design:type", Boolean)
    ], ListAvailablePhoneNumberLocalQueryParams.prototype, "excludeLocalAddressRequired", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=FaxEnabled" }),
        __metadata("design:type", Boolean)
    ], ListAvailablePhoneNumberLocalQueryParams.prototype, "faxEnabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=InLata" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberLocalQueryParams.prototype, "inLata", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=InLocality" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberLocalQueryParams.prototype, "inLocality", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=InPostalCode" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberLocalQueryParams.prototype, "inPostalCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=InRateCenter" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberLocalQueryParams.prototype, "inRateCenter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=InRegion" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberLocalQueryParams.prototype, "inRegion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=MmsEnabled" }),
        __metadata("design:type", Boolean)
    ], ListAvailablePhoneNumberLocalQueryParams.prototype, "mmsEnabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=NearLatLong" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberLocalQueryParams.prototype, "nearLatLong", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=NearNumber" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberLocalQueryParams.prototype, "nearNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListAvailablePhoneNumberLocalQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=SmsEnabled" }),
        __metadata("design:type", Boolean)
    ], ListAvailablePhoneNumberLocalQueryParams.prototype, "smsEnabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=VoiceEnabled" }),
        __metadata("design:type", Boolean)
    ], ListAvailablePhoneNumberLocalQueryParams.prototype, "voiceEnabled", void 0);
    return ListAvailablePhoneNumberLocalQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListAvailablePhoneNumberLocalQueryParams = ListAvailablePhoneNumberLocalQueryParams;
var ListAvailablePhoneNumberLocalSecurity = /** @class */ (function (_super) {
    __extends(ListAvailablePhoneNumberLocalSecurity, _super);
    function ListAvailablePhoneNumberLocalSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListAvailablePhoneNumberLocalSecurity.prototype, "accountSidAuthToken", void 0);
    return ListAvailablePhoneNumberLocalSecurity;
}(utils_1.SpeakeasyBase));
exports.ListAvailablePhoneNumberLocalSecurity = ListAvailablePhoneNumberLocalSecurity;
var ListAvailablePhoneNumberLocalListAvailablePhoneNumberLocalResponse = /** @class */ (function (_super) {
    __extends(ListAvailablePhoneNumberLocalListAvailablePhoneNumberLocalResponse, _super);
    function ListAvailablePhoneNumberLocalListAvailablePhoneNumberLocalResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=available_phone_numbers", elemType: shared.ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberLocal }),
        __metadata("design:type", Array)
    ], ListAvailablePhoneNumberLocalListAvailablePhoneNumberLocalResponse.prototype, "availablePhoneNumbers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=end" }),
        __metadata("design:type", Number)
    ], ListAvailablePhoneNumberLocalListAvailablePhoneNumberLocalResponse.prototype, "end", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_page_uri" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberLocalListAvailablePhoneNumberLocalResponse.prototype, "firstPageUri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_uri" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberLocalListAvailablePhoneNumberLocalResponse.prototype, "nextPageUri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListAvailablePhoneNumberLocalListAvailablePhoneNumberLocalResponse.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListAvailablePhoneNumberLocalListAvailablePhoneNumberLocalResponse.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous_page_uri" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberLocalListAvailablePhoneNumberLocalResponse.prototype, "previousPageUri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=start" }),
        __metadata("design:type", Number)
    ], ListAvailablePhoneNumberLocalListAvailablePhoneNumberLocalResponse.prototype, "start", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberLocalListAvailablePhoneNumberLocalResponse.prototype, "uri", void 0);
    return ListAvailablePhoneNumberLocalListAvailablePhoneNumberLocalResponse;
}(utils_1.SpeakeasyBase));
exports.ListAvailablePhoneNumberLocalListAvailablePhoneNumberLocalResponse = ListAvailablePhoneNumberLocalListAvailablePhoneNumberLocalResponse;
var ListAvailablePhoneNumberLocalRequest = /** @class */ (function (_super) {
    __extends(ListAvailablePhoneNumberLocalRequest, _super);
    function ListAvailablePhoneNumberLocalRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberLocalRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListAvailablePhoneNumberLocalPathParams)
    ], ListAvailablePhoneNumberLocalRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListAvailablePhoneNumberLocalQueryParams)
    ], ListAvailablePhoneNumberLocalRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListAvailablePhoneNumberLocalSecurity)
    ], ListAvailablePhoneNumberLocalRequest.prototype, "security", void 0);
    return ListAvailablePhoneNumberLocalRequest;
}(utils_1.SpeakeasyBase));
exports.ListAvailablePhoneNumberLocalRequest = ListAvailablePhoneNumberLocalRequest;
var ListAvailablePhoneNumberLocalResponse = /** @class */ (function (_super) {
    __extends(ListAvailablePhoneNumberLocalResponse, _super);
    function ListAvailablePhoneNumberLocalResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberLocalResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListAvailablePhoneNumberLocalListAvailablePhoneNumberLocalResponse)
    ], ListAvailablePhoneNumberLocalResponse.prototype, "listAvailablePhoneNumberLocalResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListAvailablePhoneNumberLocalResponse.prototype, "statusCode", void 0);
    return ListAvailablePhoneNumberLocalResponse;
}(utils_1.SpeakeasyBase));
exports.ListAvailablePhoneNumberLocalResponse = ListAvailablePhoneNumberLocalResponse;
