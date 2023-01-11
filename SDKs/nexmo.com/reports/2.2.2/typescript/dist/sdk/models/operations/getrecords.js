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
exports.GetRecordsResponse = exports.GetRecordsRequest = exports.GetRecords200ApplicationJson11 = exports.GetRecords200ApplicationJson11Links = exports.GetRecords200ApplicationJson11LinksSelf = exports.GetRecords200ApplicationJson10 = exports.GetRecords200ApplicationJson10Links = exports.GetRecords200ApplicationJson10LinksSelf = exports.GetRecords200ApplicationJson9 = exports.GetRecords200ApplicationJson9DirectionEnum = exports.GetRecords200ApplicationJson9Links = exports.GetRecords200ApplicationJson9LinksSelf = exports.GetRecords200ApplicationJson8 = exports.GetRecords200ApplicationJson8DirectionEnum = exports.GetRecords200ApplicationJson8Links = exports.GetRecords200ApplicationJson8LinksSelf = exports.GetRecords200ApplicationJson7 = exports.GetRecords200ApplicationJson7Links = exports.GetRecords200ApplicationJson7LinksSelf = exports.GetRecords200ApplicationJson6 = exports.GetRecords200ApplicationJson6Links = exports.GetRecords200ApplicationJson6LinksSelf = exports.GetRecords200ApplicationJson5 = exports.GetRecords200ApplicationJson5Links = exports.GetRecords200ApplicationJson5LinksSelf = exports.GetRecords200ApplicationJson4 = exports.GetRecords200ApplicationJson4Links = exports.GetRecords200ApplicationJson4LinksSelf = exports.GetRecords200ApplicationJson3 = exports.GetRecords200ApplicationJson3Links = exports.GetRecords200ApplicationJson3LinksSelf = exports.GetRecords200ApplicationJson2 = exports.GetRecords200ApplicationJson2DirectionEnum = exports.GetRecords200ApplicationJson2Links = exports.GetRecords200ApplicationJson2LinksSelf = exports.GetRecords200ApplicationJson1 = exports.GetRecords200ApplicationJson1DirectionEnum = exports.GetRecords200ApplicationJson1Links = exports.GetRecords200ApplicationJson1LinksSelf = exports.GetRecordsSecurity = exports.GetRecordsQueryParams = exports.GetRecordsStatusEnum = exports.GetRecordsProductEnum = exports.GetRecordsDirectionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetRecordsDirectionEnum;
(function (GetRecordsDirectionEnum) {
    GetRecordsDirectionEnum["Inbound"] = "inbound";
    GetRecordsDirectionEnum["Outbound"] = "outbound";
})(GetRecordsDirectionEnum = exports.GetRecordsDirectionEnum || (exports.GetRecordsDirectionEnum = {}));
var GetRecordsProductEnum;
(function (GetRecordsProductEnum) {
    GetRecordsProductEnum["Sms"] = "SMS";
    GetRecordsProductEnum["VoiceCall"] = "VOICE-CALL";
    GetRecordsProductEnum["VoiceFailed"] = "VOICE-FAILED";
    GetRecordsProductEnum["InAppVoice"] = "IN-APP-VOICE";
    GetRecordsProductEnum["WebsocketCall"] = "WEBSOCKET-CALL";
    GetRecordsProductEnum["VerifyApi"] = "VERIFY-API";
    GetRecordsProductEnum["NumberInsight"] = "NUMBER-INSIGHT";
    GetRecordsProductEnum["Messages"] = "MESSAGES";
    GetRecordsProductEnum["Asr"] = "ASR";
    GetRecordsProductEnum["Conversations"] = "CONVERSATIONS";
    GetRecordsProductEnum["ReportsUsage"] = "REPORTS-USAGE";
})(GetRecordsProductEnum = exports.GetRecordsProductEnum || (exports.GetRecordsProductEnum = {}));
var GetRecordsStatusEnum;
(function (GetRecordsStatusEnum) {
    GetRecordsStatusEnum["Delivered"] = "delivered";
    GetRecordsStatusEnum["Expired"] = "expired";
    GetRecordsStatusEnum["Failed"] = "failed";
    GetRecordsStatusEnum["Rejected"] = "rejected";
    GetRecordsStatusEnum["Accepted"] = "accepted";
    GetRecordsStatusEnum["Buffered"] = "buffered";
    GetRecordsStatusEnum["Unknown"] = "unknown";
    GetRecordsStatusEnum["Deleted"] = "deleted";
})(GetRecordsStatusEnum = exports.GetRecordsStatusEnum || (exports.GetRecordsStatusEnum = {}));
var GetRecordsQueryParams = /** @class */ (function (_super) {
    __extends(GetRecordsQueryParams, _super);
    function GetRecordsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=account_id" }),
        __metadata("design:type", String)
    ], GetRecordsQueryParams.prototype, "accountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=date_end" }),
        __metadata("design:type", Date)
    ], GetRecordsQueryParams.prototype, "dateEnd", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=date_start" }),
        __metadata("design:type", Date)
    ], GetRecordsQueryParams.prototype, "dateStart", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=direction" }),
        __metadata("design:type", String)
    ], GetRecordsQueryParams.prototype, "direction", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=id" }),
        __metadata("design:type", String)
    ], GetRecordsQueryParams.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=include_message" }),
        __metadata("design:type", Boolean)
    ], GetRecordsQueryParams.prototype, "includeMessage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=product" }),
        __metadata("design:type", String)
    ], GetRecordsQueryParams.prototype, "product", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=show_concatenated" }),
        __metadata("design:type", Boolean)
    ], GetRecordsQueryParams.prototype, "showConcatenated", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", String)
    ], GetRecordsQueryParams.prototype, "status", void 0);
    return GetRecordsQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetRecordsQueryParams = GetRecordsQueryParams;
var GetRecordsSecurity = /** @class */ (function (_super) {
    __extends(GetRecordsSecurity, _super);
    function GetRecordsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuth)
    ], GetRecordsSecurity.prototype, "basicAuth", void 0);
    return GetRecordsSecurity;
}(utils_1.SpeakeasyBase));
exports.GetRecordsSecurity = GetRecordsSecurity;
var GetRecords200ApplicationJson1LinksSelf = /** @class */ (function (_super) {
    __extends(GetRecords200ApplicationJson1LinksSelf, _super);
    function GetRecords200ApplicationJson1LinksSelf() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], GetRecords200ApplicationJson1LinksSelf.prototype, "href", void 0);
    return GetRecords200ApplicationJson1LinksSelf;
}(utils_1.SpeakeasyBase));
exports.GetRecords200ApplicationJson1LinksSelf = GetRecords200ApplicationJson1LinksSelf;
var GetRecords200ApplicationJson1Links = /** @class */ (function (_super) {
    __extends(GetRecords200ApplicationJson1Links, _super);
    function GetRecords200ApplicationJson1Links() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=self" }),
        __metadata("design:type", GetRecords200ApplicationJson1LinksSelf)
    ], GetRecords200ApplicationJson1Links.prototype, "self", void 0);
    return GetRecords200ApplicationJson1Links;
}(utils_1.SpeakeasyBase));
exports.GetRecords200ApplicationJson1Links = GetRecords200ApplicationJson1Links;
var GetRecords200ApplicationJson1DirectionEnum;
(function (GetRecords200ApplicationJson1DirectionEnum) {
    GetRecords200ApplicationJson1DirectionEnum["Inbound"] = "inbound";
    GetRecords200ApplicationJson1DirectionEnum["Outbound"] = "outbound";
})(GetRecords200ApplicationJson1DirectionEnum = exports.GetRecords200ApplicationJson1DirectionEnum || (exports.GetRecords200ApplicationJson1DirectionEnum = {}));
// GetRecords200ApplicationJson1
/**
 * SMS (Outbound)
**/
var GetRecords200ApplicationJson1 = /** @class */ (function (_super) {
    __extends(GetRecords200ApplicationJson1, _super);
    function GetRecords200ApplicationJson1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=_links" }),
        __metadata("design:type", GetRecords200ApplicationJson1Links)
    ], GetRecords200ApplicationJson1.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=account_id" }),
        __metadata("design:type", String)
    ], GetRecords200ApplicationJson1.prototype, "accountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], GetRecords200ApplicationJson1.prototype, "currency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=direction" }),
        __metadata("design:type", String)
    ], GetRecords200ApplicationJson1.prototype, "direction", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ids_not_found" }),
        __metadata("design:type", String)
    ], GetRecords200ApplicationJson1.prototype, "idsNotFound", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=include_message" }),
        __metadata("design:type", Boolean)
    ], GetRecords200ApplicationJson1.prototype, "includeMessage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=items_count" }),
        __metadata("design:type", Number)
    ], GetRecords200ApplicationJson1.prototype, "itemsCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=price" }),
        __metadata("design:type", Number)
    ], GetRecords200ApplicationJson1.prototype, "price", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=product" }),
        __metadata("design:type", String)
    ], GetRecords200ApplicationJson1.prototype, "product", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=received_at" }),
        __metadata("design:type", Date)
    ], GetRecords200ApplicationJson1.prototype, "receivedAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=records", elemType: shared.JsonSmsOutboundWithBody }),
        __metadata("design:type", Array)
    ], GetRecords200ApplicationJson1.prototype, "records", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], GetRecords200ApplicationJson1.prototype, "requestId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_status" }),
        __metadata("design:type", String)
    ], GetRecords200ApplicationJson1.prototype, "requestStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=show_concatenated" }),
        __metadata("design:type", Boolean)
    ], GetRecords200ApplicationJson1.prototype, "showConcatenated", void 0);
    return GetRecords200ApplicationJson1;
}(utils_1.SpeakeasyBase));
exports.GetRecords200ApplicationJson1 = GetRecords200ApplicationJson1;
var GetRecords200ApplicationJson2LinksSelf = /** @class */ (function (_super) {
    __extends(GetRecords200ApplicationJson2LinksSelf, _super);
    function GetRecords200ApplicationJson2LinksSelf() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], GetRecords200ApplicationJson2LinksSelf.prototype, "href", void 0);
    return GetRecords200ApplicationJson2LinksSelf;
}(utils_1.SpeakeasyBase));
exports.GetRecords200ApplicationJson2LinksSelf = GetRecords200ApplicationJson2LinksSelf;
var GetRecords200ApplicationJson2Links = /** @class */ (function (_super) {
    __extends(GetRecords200ApplicationJson2Links, _super);
    function GetRecords200ApplicationJson2Links() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=self" }),
        __metadata("design:type", GetRecords200ApplicationJson2LinksSelf)
    ], GetRecords200ApplicationJson2Links.prototype, "self", void 0);
    return GetRecords200ApplicationJson2Links;
}(utils_1.SpeakeasyBase));
exports.GetRecords200ApplicationJson2Links = GetRecords200ApplicationJson2Links;
var GetRecords200ApplicationJson2DirectionEnum;
(function (GetRecords200ApplicationJson2DirectionEnum) {
    GetRecords200ApplicationJson2DirectionEnum["Inbound"] = "inbound";
    GetRecords200ApplicationJson2DirectionEnum["Outbound"] = "outbound";
})(GetRecords200ApplicationJson2DirectionEnum = exports.GetRecords200ApplicationJson2DirectionEnum || (exports.GetRecords200ApplicationJson2DirectionEnum = {}));
// GetRecords200ApplicationJson2
/**
 * SMS (Inbound)
**/
var GetRecords200ApplicationJson2 = /** @class */ (function (_super) {
    __extends(GetRecords200ApplicationJson2, _super);
    function GetRecords200ApplicationJson2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=_links" }),
        __metadata("design:type", GetRecords200ApplicationJson2Links)
    ], GetRecords200ApplicationJson2.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=account_id" }),
        __metadata("design:type", String)
    ], GetRecords200ApplicationJson2.prototype, "accountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], GetRecords200ApplicationJson2.prototype, "currency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=direction" }),
        __metadata("design:type", String)
    ], GetRecords200ApplicationJson2.prototype, "direction", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ids_not_found" }),
        __metadata("design:type", String)
    ], GetRecords200ApplicationJson2.prototype, "idsNotFound", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=include_message" }),
        __metadata("design:type", Boolean)
    ], GetRecords200ApplicationJson2.prototype, "includeMessage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=items_count" }),
        __metadata("design:type", Number)
    ], GetRecords200ApplicationJson2.prototype, "itemsCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=price" }),
        __metadata("design:type", Number)
    ], GetRecords200ApplicationJson2.prototype, "price", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=product" }),
        __metadata("design:type", String)
    ], GetRecords200ApplicationJson2.prototype, "product", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=received_at" }),
        __metadata("design:type", Date)
    ], GetRecords200ApplicationJson2.prototype, "receivedAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=records", elemType: shared.JsonSmsInboundWithBody }),
        __metadata("design:type", Array)
    ], GetRecords200ApplicationJson2.prototype, "records", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], GetRecords200ApplicationJson2.prototype, "requestId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_status" }),
        __metadata("design:type", String)
    ], GetRecords200ApplicationJson2.prototype, "requestStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=show_concatenated" }),
        __metadata("design:type", Boolean)
    ], GetRecords200ApplicationJson2.prototype, "showConcatenated", void 0);
    return GetRecords200ApplicationJson2;
}(utils_1.SpeakeasyBase));
exports.GetRecords200ApplicationJson2 = GetRecords200ApplicationJson2;
var GetRecords200ApplicationJson3LinksSelf = /** @class */ (function (_super) {
    __extends(GetRecords200ApplicationJson3LinksSelf, _super);
    function GetRecords200ApplicationJson3LinksSelf() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], GetRecords200ApplicationJson3LinksSelf.prototype, "href", void 0);
    return GetRecords200ApplicationJson3LinksSelf;
}(utils_1.SpeakeasyBase));
exports.GetRecords200ApplicationJson3LinksSelf = GetRecords200ApplicationJson3LinksSelf;
var GetRecords200ApplicationJson3Links = /** @class */ (function (_super) {
    __extends(GetRecords200ApplicationJson3Links, _super);
    function GetRecords200ApplicationJson3Links() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=self" }),
        __metadata("design:type", GetRecords200ApplicationJson3LinksSelf)
    ], GetRecords200ApplicationJson3Links.prototype, "self", void 0);
    return GetRecords200ApplicationJson3Links;
}(utils_1.SpeakeasyBase));
exports.GetRecords200ApplicationJson3Links = GetRecords200ApplicationJson3Links;
// GetRecords200ApplicationJson3
/**
 * Voice Call
**/
var GetRecords200ApplicationJson3 = /** @class */ (function (_super) {
    __extends(GetRecords200ApplicationJson3, _super);
    function GetRecords200ApplicationJson3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=_links" }),
        __metadata("design:type", GetRecords200ApplicationJson3Links)
    ], GetRecords200ApplicationJson3.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=account_id" }),
        __metadata("design:type", String)
    ], GetRecords200ApplicationJson3.prototype, "accountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], GetRecords200ApplicationJson3.prototype, "currency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=direction" }),
        __metadata("design:type", String)
    ], GetRecords200ApplicationJson3.prototype, "direction", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ids_not_found" }),
        __metadata("design:type", String)
    ], GetRecords200ApplicationJson3.prototype, "idsNotFound", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=items_count" }),
        __metadata("design:type", Number)
    ], GetRecords200ApplicationJson3.prototype, "itemsCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=price" }),
        __metadata("design:type", Number)
    ], GetRecords200ApplicationJson3.prototype, "price", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=product" }),
        __metadata("design:type", String)
    ], GetRecords200ApplicationJson3.prototype, "product", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=received_at" }),
        __metadata("design:type", Date)
    ], GetRecords200ApplicationJson3.prototype, "receivedAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=records", elemType: shared.CsvVoice }),
        __metadata("design:type", Array)
    ], GetRecords200ApplicationJson3.prototype, "records", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], GetRecords200ApplicationJson3.prototype, "requestId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_status" }),
        __metadata("design:type", String)
    ], GetRecords200ApplicationJson3.prototype, "requestStatus", void 0);
    return GetRecords200ApplicationJson3;
}(utils_1.SpeakeasyBase));
exports.GetRecords200ApplicationJson3 = GetRecords200ApplicationJson3;
var GetRecords200ApplicationJson4LinksSelf = /** @class */ (function (_super) {
    __extends(GetRecords200ApplicationJson4LinksSelf, _super);
    function GetRecords200ApplicationJson4LinksSelf() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], GetRecords200ApplicationJson4LinksSelf.prototype, "href", void 0);
    return GetRecords200ApplicationJson4LinksSelf;
}(utils_1.SpeakeasyBase));
exports.GetRecords200ApplicationJson4LinksSelf = GetRecords200ApplicationJson4LinksSelf;
var GetRecords200ApplicationJson4Links = /** @class */ (function (_super) {
    __extends(GetRecords200ApplicationJson4Links, _super);
    function GetRecords200ApplicationJson4Links() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=self" }),
        __metadata("design:type", GetRecords200ApplicationJson4LinksSelf)
    ], GetRecords200ApplicationJson4Links.prototype, "self", void 0);
    return GetRecords200ApplicationJson4Links;
}(utils_1.SpeakeasyBase));
exports.GetRecords200ApplicationJson4Links = GetRecords200ApplicationJson4Links;
// GetRecords200ApplicationJson4
/**
 * In App Voice
**/
var GetRecords200ApplicationJson4 = /** @class */ (function (_super) {
    __extends(GetRecords200ApplicationJson4, _super);
    function GetRecords200ApplicationJson4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=_links" }),
        __metadata("design:type", GetRecords200ApplicationJson4Links)
    ], GetRecords200ApplicationJson4.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=account_id" }),
        __metadata("design:type", String)
    ], GetRecords200ApplicationJson4.prototype, "accountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], GetRecords200ApplicationJson4.prototype, "currency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ids_not_found" }),
        __metadata("design:type", String)
    ], GetRecords200ApplicationJson4.prototype, "idsNotFound", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=items_count" }),
        __metadata("design:type", Number)
    ], GetRecords200ApplicationJson4.prototype, "itemsCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=price" }),
        __metadata("design:type", Number)
    ], GetRecords200ApplicationJson4.prototype, "price", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=product" }),
        __metadata("design:type", String)
    ], GetRecords200ApplicationJson4.prototype, "product", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=received_at" }),
        __metadata("design:type", Date)
    ], GetRecords200ApplicationJson4.prototype, "receivedAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=records", elemType: shared.CsvInAppVoice }),
        __metadata("design:type", Array)
    ], GetRecords200ApplicationJson4.prototype, "records", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], GetRecords200ApplicationJson4.prototype, "requestId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_status" }),
        __metadata("design:type", String)
    ], GetRecords200ApplicationJson4.prototype, "requestStatus", void 0);
    return GetRecords200ApplicationJson4;
}(utils_1.SpeakeasyBase));
exports.GetRecords200ApplicationJson4 = GetRecords200ApplicationJson4;
var GetRecords200ApplicationJson5LinksSelf = /** @class */ (function (_super) {
    __extends(GetRecords200ApplicationJson5LinksSelf, _super);
    function GetRecords200ApplicationJson5LinksSelf() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], GetRecords200ApplicationJson5LinksSelf.prototype, "href", void 0);
    return GetRecords200ApplicationJson5LinksSelf;
}(utils_1.SpeakeasyBase));
exports.GetRecords200ApplicationJson5LinksSelf = GetRecords200ApplicationJson5LinksSelf;
var GetRecords200ApplicationJson5Links = /** @class */ (function (_super) {
    __extends(GetRecords200ApplicationJson5Links, _super);
    function GetRecords200ApplicationJson5Links() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=self" }),
        __metadata("design:type", GetRecords200ApplicationJson5LinksSelf)
    ], GetRecords200ApplicationJson5Links.prototype, "self", void 0);
    return GetRecords200ApplicationJson5Links;
}(utils_1.SpeakeasyBase));
exports.GetRecords200ApplicationJson5Links = GetRecords200ApplicationJson5Links;
// GetRecords200ApplicationJson5
/**
 * WebSocket Call
**/
var GetRecords200ApplicationJson5 = /** @class */ (function (_super) {
    __extends(GetRecords200ApplicationJson5, _super);
    function GetRecords200ApplicationJson5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=_links" }),
        __metadata("design:type", GetRecords200ApplicationJson5Links)
    ], GetRecords200ApplicationJson5.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=account_id" }),
        __metadata("design:type", String)
    ], GetRecords200ApplicationJson5.prototype, "accountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], GetRecords200ApplicationJson5.prototype, "currency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ids_not_found" }),
        __metadata("design:type", String)
    ], GetRecords200ApplicationJson5.prototype, "idsNotFound", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=items_count" }),
        __metadata("design:type", Number)
    ], GetRecords200ApplicationJson5.prototype, "itemsCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=price" }),
        __metadata("design:type", Number)
    ], GetRecords200ApplicationJson5.prototype, "price", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=product" }),
        __metadata("design:type", String)
    ], GetRecords200ApplicationJson5.prototype, "product", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=received_at" }),
        __metadata("design:type", Date)
    ], GetRecords200ApplicationJson5.prototype, "receivedAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=records", elemType: shared.CsvWebsockets }),
        __metadata("design:type", Array)
    ], GetRecords200ApplicationJson5.prototype, "records", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], GetRecords200ApplicationJson5.prototype, "requestId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_status" }),
        __metadata("design:type", String)
    ], GetRecords200ApplicationJson5.prototype, "requestStatus", void 0);
    return GetRecords200ApplicationJson5;
}(utils_1.SpeakeasyBase));
exports.GetRecords200ApplicationJson5 = GetRecords200ApplicationJson5;
var GetRecords200ApplicationJson6LinksSelf = /** @class */ (function (_super) {
    __extends(GetRecords200ApplicationJson6LinksSelf, _super);
    function GetRecords200ApplicationJson6LinksSelf() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], GetRecords200ApplicationJson6LinksSelf.prototype, "href", void 0);
    return GetRecords200ApplicationJson6LinksSelf;
}(utils_1.SpeakeasyBase));
exports.GetRecords200ApplicationJson6LinksSelf = GetRecords200ApplicationJson6LinksSelf;
var GetRecords200ApplicationJson6Links = /** @class */ (function (_super) {
    __extends(GetRecords200ApplicationJson6Links, _super);
    function GetRecords200ApplicationJson6Links() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=self" }),
        __metadata("design:type", GetRecords200ApplicationJson6LinksSelf)
    ], GetRecords200ApplicationJson6Links.prototype, "self", void 0);
    return GetRecords200ApplicationJson6Links;
}(utils_1.SpeakeasyBase));
exports.GetRecords200ApplicationJson6Links = GetRecords200ApplicationJson6Links;
// GetRecords200ApplicationJson6
/**
 * Verify
**/
var GetRecords200ApplicationJson6 = /** @class */ (function (_super) {
    __extends(GetRecords200ApplicationJson6, _super);
    function GetRecords200ApplicationJson6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=_links" }),
        __metadata("design:type", GetRecords200ApplicationJson6Links)
    ], GetRecords200ApplicationJson6.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=account_id" }),
        __metadata("design:type", String)
    ], GetRecords200ApplicationJson6.prototype, "accountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], GetRecords200ApplicationJson6.prototype, "currency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ids_not_found" }),
        __metadata("design:type", String)
    ], GetRecords200ApplicationJson6.prototype, "idsNotFound", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=items_count" }),
        __metadata("design:type", Number)
    ], GetRecords200ApplicationJson6.prototype, "itemsCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=price" }),
        __metadata("design:type", Number)
    ], GetRecords200ApplicationJson6.prototype, "price", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=product" }),
        __metadata("design:type", String)
    ], GetRecords200ApplicationJson6.prototype, "product", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=received_at" }),
        __metadata("design:type", Date)
    ], GetRecords200ApplicationJson6.prototype, "receivedAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=records", elemType: shared.CsvVerify }),
        __metadata("design:type", Array)
    ], GetRecords200ApplicationJson6.prototype, "records", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], GetRecords200ApplicationJson6.prototype, "requestId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_status" }),
        __metadata("design:type", String)
    ], GetRecords200ApplicationJson6.prototype, "requestStatus", void 0);
    return GetRecords200ApplicationJson6;
}(utils_1.SpeakeasyBase));
exports.GetRecords200ApplicationJson6 = GetRecords200ApplicationJson6;
var GetRecords200ApplicationJson7LinksSelf = /** @class */ (function (_super) {
    __extends(GetRecords200ApplicationJson7LinksSelf, _super);
    function GetRecords200ApplicationJson7LinksSelf() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], GetRecords200ApplicationJson7LinksSelf.prototype, "href", void 0);
    return GetRecords200ApplicationJson7LinksSelf;
}(utils_1.SpeakeasyBase));
exports.GetRecords200ApplicationJson7LinksSelf = GetRecords200ApplicationJson7LinksSelf;
var GetRecords200ApplicationJson7Links = /** @class */ (function (_super) {
    __extends(GetRecords200ApplicationJson7Links, _super);
    function GetRecords200ApplicationJson7Links() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=self" }),
        __metadata("design:type", GetRecords200ApplicationJson7LinksSelf)
    ], GetRecords200ApplicationJson7Links.prototype, "self", void 0);
    return GetRecords200ApplicationJson7Links;
}(utils_1.SpeakeasyBase));
exports.GetRecords200ApplicationJson7Links = GetRecords200ApplicationJson7Links;
// GetRecords200ApplicationJson7
/**
 * Number Insight
**/
var GetRecords200ApplicationJson7 = /** @class */ (function (_super) {
    __extends(GetRecords200ApplicationJson7, _super);
    function GetRecords200ApplicationJson7() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=_links" }),
        __metadata("design:type", GetRecords200ApplicationJson7Links)
    ], GetRecords200ApplicationJson7.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=account_id" }),
        __metadata("design:type", String)
    ], GetRecords200ApplicationJson7.prototype, "accountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], GetRecords200ApplicationJson7.prototype, "currency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ids_not_found" }),
        __metadata("design:type", String)
    ], GetRecords200ApplicationJson7.prototype, "idsNotFound", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=items_count" }),
        __metadata("design:type", Number)
    ], GetRecords200ApplicationJson7.prototype, "itemsCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=price" }),
        __metadata("design:type", Number)
    ], GetRecords200ApplicationJson7.prototype, "price", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=product" }),
        __metadata("design:type", String)
    ], GetRecords200ApplicationJson7.prototype, "product", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=received_at" }),
        __metadata("design:type", Date)
    ], GetRecords200ApplicationJson7.prototype, "receivedAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=records", elemType: shared.CsvNi }),
        __metadata("design:type", Array)
    ], GetRecords200ApplicationJson7.prototype, "records", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], GetRecords200ApplicationJson7.prototype, "requestId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_status" }),
        __metadata("design:type", String)
    ], GetRecords200ApplicationJson7.prototype, "requestStatus", void 0);
    return GetRecords200ApplicationJson7;
}(utils_1.SpeakeasyBase));
exports.GetRecords200ApplicationJson7 = GetRecords200ApplicationJson7;
var GetRecords200ApplicationJson8LinksSelf = /** @class */ (function (_super) {
    __extends(GetRecords200ApplicationJson8LinksSelf, _super);
    function GetRecords200ApplicationJson8LinksSelf() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], GetRecords200ApplicationJson8LinksSelf.prototype, "href", void 0);
    return GetRecords200ApplicationJson8LinksSelf;
}(utils_1.SpeakeasyBase));
exports.GetRecords200ApplicationJson8LinksSelf = GetRecords200ApplicationJson8LinksSelf;
var GetRecords200ApplicationJson8Links = /** @class */ (function (_super) {
    __extends(GetRecords200ApplicationJson8Links, _super);
    function GetRecords200ApplicationJson8Links() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=self" }),
        __metadata("design:type", GetRecords200ApplicationJson8LinksSelf)
    ], GetRecords200ApplicationJson8Links.prototype, "self", void 0);
    return GetRecords200ApplicationJson8Links;
}(utils_1.SpeakeasyBase));
exports.GetRecords200ApplicationJson8Links = GetRecords200ApplicationJson8Links;
var GetRecords200ApplicationJson8DirectionEnum;
(function (GetRecords200ApplicationJson8DirectionEnum) {
    GetRecords200ApplicationJson8DirectionEnum["Inbound"] = "inbound";
    GetRecords200ApplicationJson8DirectionEnum["Outbound"] = "outbound";
})(GetRecords200ApplicationJson8DirectionEnum = exports.GetRecords200ApplicationJson8DirectionEnum || (exports.GetRecords200ApplicationJson8DirectionEnum = {}));
// GetRecords200ApplicationJson8
/**
 * Messages (Outbound)
**/
var GetRecords200ApplicationJson8 = /** @class */ (function (_super) {
    __extends(GetRecords200ApplicationJson8, _super);
    function GetRecords200ApplicationJson8() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=_links" }),
        __metadata("design:type", GetRecords200ApplicationJson8Links)
    ], GetRecords200ApplicationJson8.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=account_id" }),
        __metadata("design:type", String)
    ], GetRecords200ApplicationJson8.prototype, "accountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], GetRecords200ApplicationJson8.prototype, "currency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=direction" }),
        __metadata("design:type", String)
    ], GetRecords200ApplicationJson8.prototype, "direction", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ids_not_found" }),
        __metadata("design:type", String)
    ], GetRecords200ApplicationJson8.prototype, "idsNotFound", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=include_message" }),
        __metadata("design:type", Boolean)
    ], GetRecords200ApplicationJson8.prototype, "includeMessage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=items_count" }),
        __metadata("design:type", Number)
    ], GetRecords200ApplicationJson8.prototype, "itemsCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=price" }),
        __metadata("design:type", Number)
    ], GetRecords200ApplicationJson8.prototype, "price", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=product" }),
        __metadata("design:type", String)
    ], GetRecords200ApplicationJson8.prototype, "product", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=received_at" }),
        __metadata("design:type", Date)
    ], GetRecords200ApplicationJson8.prototype, "receivedAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=records", elemType: shared.CsvMessagesOutbound }),
        __metadata("design:type", Array)
    ], GetRecords200ApplicationJson8.prototype, "records", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], GetRecords200ApplicationJson8.prototype, "requestId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_status" }),
        __metadata("design:type", String)
    ], GetRecords200ApplicationJson8.prototype, "requestStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=show_concatenated" }),
        __metadata("design:type", Boolean)
    ], GetRecords200ApplicationJson8.prototype, "showConcatenated", void 0);
    return GetRecords200ApplicationJson8;
}(utils_1.SpeakeasyBase));
exports.GetRecords200ApplicationJson8 = GetRecords200ApplicationJson8;
var GetRecords200ApplicationJson9LinksSelf = /** @class */ (function (_super) {
    __extends(GetRecords200ApplicationJson9LinksSelf, _super);
    function GetRecords200ApplicationJson9LinksSelf() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], GetRecords200ApplicationJson9LinksSelf.prototype, "href", void 0);
    return GetRecords200ApplicationJson9LinksSelf;
}(utils_1.SpeakeasyBase));
exports.GetRecords200ApplicationJson9LinksSelf = GetRecords200ApplicationJson9LinksSelf;
var GetRecords200ApplicationJson9Links = /** @class */ (function (_super) {
    __extends(GetRecords200ApplicationJson9Links, _super);
    function GetRecords200ApplicationJson9Links() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=self" }),
        __metadata("design:type", GetRecords200ApplicationJson9LinksSelf)
    ], GetRecords200ApplicationJson9Links.prototype, "self", void 0);
    return GetRecords200ApplicationJson9Links;
}(utils_1.SpeakeasyBase));
exports.GetRecords200ApplicationJson9Links = GetRecords200ApplicationJson9Links;
var GetRecords200ApplicationJson9DirectionEnum;
(function (GetRecords200ApplicationJson9DirectionEnum) {
    GetRecords200ApplicationJson9DirectionEnum["Inbound"] = "inbound";
    GetRecords200ApplicationJson9DirectionEnum["Outbound"] = "outbound";
})(GetRecords200ApplicationJson9DirectionEnum = exports.GetRecords200ApplicationJson9DirectionEnum || (exports.GetRecords200ApplicationJson9DirectionEnum = {}));
// GetRecords200ApplicationJson9
/**
 * Messages (Inbound)
**/
var GetRecords200ApplicationJson9 = /** @class */ (function (_super) {
    __extends(GetRecords200ApplicationJson9, _super);
    function GetRecords200ApplicationJson9() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=_links" }),
        __metadata("design:type", GetRecords200ApplicationJson9Links)
    ], GetRecords200ApplicationJson9.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=account_id" }),
        __metadata("design:type", String)
    ], GetRecords200ApplicationJson9.prototype, "accountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], GetRecords200ApplicationJson9.prototype, "currency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=direction" }),
        __metadata("design:type", String)
    ], GetRecords200ApplicationJson9.prototype, "direction", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ids_not_found" }),
        __metadata("design:type", String)
    ], GetRecords200ApplicationJson9.prototype, "idsNotFound", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=include_message" }),
        __metadata("design:type", Boolean)
    ], GetRecords200ApplicationJson9.prototype, "includeMessage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=items_count" }),
        __metadata("design:type", Number)
    ], GetRecords200ApplicationJson9.prototype, "itemsCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=price" }),
        __metadata("design:type", Number)
    ], GetRecords200ApplicationJson9.prototype, "price", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=product" }),
        __metadata("design:type", String)
    ], GetRecords200ApplicationJson9.prototype, "product", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=received_at" }),
        __metadata("design:type", Date)
    ], GetRecords200ApplicationJson9.prototype, "receivedAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=records", elemType: shared.CsvMessagesInbound }),
        __metadata("design:type", Array)
    ], GetRecords200ApplicationJson9.prototype, "records", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], GetRecords200ApplicationJson9.prototype, "requestId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_status" }),
        __metadata("design:type", String)
    ], GetRecords200ApplicationJson9.prototype, "requestStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=show_concatenated" }),
        __metadata("design:type", Boolean)
    ], GetRecords200ApplicationJson9.prototype, "showConcatenated", void 0);
    return GetRecords200ApplicationJson9;
}(utils_1.SpeakeasyBase));
exports.GetRecords200ApplicationJson9 = GetRecords200ApplicationJson9;
var GetRecords200ApplicationJson10LinksSelf = /** @class */ (function (_super) {
    __extends(GetRecords200ApplicationJson10LinksSelf, _super);
    function GetRecords200ApplicationJson10LinksSelf() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], GetRecords200ApplicationJson10LinksSelf.prototype, "href", void 0);
    return GetRecords200ApplicationJson10LinksSelf;
}(utils_1.SpeakeasyBase));
exports.GetRecords200ApplicationJson10LinksSelf = GetRecords200ApplicationJson10LinksSelf;
var GetRecords200ApplicationJson10Links = /** @class */ (function (_super) {
    __extends(GetRecords200ApplicationJson10Links, _super);
    function GetRecords200ApplicationJson10Links() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=self" }),
        __metadata("design:type", GetRecords200ApplicationJson10LinksSelf)
    ], GetRecords200ApplicationJson10Links.prototype, "self", void 0);
    return GetRecords200ApplicationJson10Links;
}(utils_1.SpeakeasyBase));
exports.GetRecords200ApplicationJson10Links = GetRecords200ApplicationJson10Links;
// GetRecords200ApplicationJson10
/**
 * ASR
**/
var GetRecords200ApplicationJson10 = /** @class */ (function (_super) {
    __extends(GetRecords200ApplicationJson10, _super);
    function GetRecords200ApplicationJson10() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=_links" }),
        __metadata("design:type", GetRecords200ApplicationJson10Links)
    ], GetRecords200ApplicationJson10.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=account_id" }),
        __metadata("design:type", String)
    ], GetRecords200ApplicationJson10.prototype, "accountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], GetRecords200ApplicationJson10.prototype, "currency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ids_not_found" }),
        __metadata("design:type", String)
    ], GetRecords200ApplicationJson10.prototype, "idsNotFound", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=items_count" }),
        __metadata("design:type", Number)
    ], GetRecords200ApplicationJson10.prototype, "itemsCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=price" }),
        __metadata("design:type", Number)
    ], GetRecords200ApplicationJson10.prototype, "price", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=product" }),
        __metadata("design:type", String)
    ], GetRecords200ApplicationJson10.prototype, "product", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=received_at" }),
        __metadata("design:type", Date)
    ], GetRecords200ApplicationJson10.prototype, "receivedAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=records", elemType: shared.CsvAsr }),
        __metadata("design:type", Array)
    ], GetRecords200ApplicationJson10.prototype, "records", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], GetRecords200ApplicationJson10.prototype, "requestId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_status" }),
        __metadata("design:type", String)
    ], GetRecords200ApplicationJson10.prototype, "requestStatus", void 0);
    return GetRecords200ApplicationJson10;
}(utils_1.SpeakeasyBase));
exports.GetRecords200ApplicationJson10 = GetRecords200ApplicationJson10;
var GetRecords200ApplicationJson11LinksSelf = /** @class */ (function (_super) {
    __extends(GetRecords200ApplicationJson11LinksSelf, _super);
    function GetRecords200ApplicationJson11LinksSelf() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], GetRecords200ApplicationJson11LinksSelf.prototype, "href", void 0);
    return GetRecords200ApplicationJson11LinksSelf;
}(utils_1.SpeakeasyBase));
exports.GetRecords200ApplicationJson11LinksSelf = GetRecords200ApplicationJson11LinksSelf;
var GetRecords200ApplicationJson11Links = /** @class */ (function (_super) {
    __extends(GetRecords200ApplicationJson11Links, _super);
    function GetRecords200ApplicationJson11Links() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=self" }),
        __metadata("design:type", GetRecords200ApplicationJson11LinksSelf)
    ], GetRecords200ApplicationJson11Links.prototype, "self", void 0);
    return GetRecords200ApplicationJson11Links;
}(utils_1.SpeakeasyBase));
exports.GetRecords200ApplicationJson11Links = GetRecords200ApplicationJson11Links;
// GetRecords200ApplicationJson11
/**
 * Conversations
**/
var GetRecords200ApplicationJson11 = /** @class */ (function (_super) {
    __extends(GetRecords200ApplicationJson11, _super);
    function GetRecords200ApplicationJson11() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=_links" }),
        __metadata("design:type", GetRecords200ApplicationJson11Links)
    ], GetRecords200ApplicationJson11.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=account_id" }),
        __metadata("design:type", String)
    ], GetRecords200ApplicationJson11.prototype, "accountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], GetRecords200ApplicationJson11.prototype, "currency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ids_not_found" }),
        __metadata("design:type", String)
    ], GetRecords200ApplicationJson11.prototype, "idsNotFound", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=items_count" }),
        __metadata("design:type", Number)
    ], GetRecords200ApplicationJson11.prototype, "itemsCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=price" }),
        __metadata("design:type", Number)
    ], GetRecords200ApplicationJson11.prototype, "price", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=product" }),
        __metadata("design:type", String)
    ], GetRecords200ApplicationJson11.prototype, "product", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=received_at" }),
        __metadata("design:type", Date)
    ], GetRecords200ApplicationJson11.prototype, "receivedAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=records", elemType: shared.CsvConversations }),
        __metadata("design:type", Array)
    ], GetRecords200ApplicationJson11.prototype, "records", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], GetRecords200ApplicationJson11.prototype, "requestId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_status" }),
        __metadata("design:type", String)
    ], GetRecords200ApplicationJson11.prototype, "requestStatus", void 0);
    return GetRecords200ApplicationJson11;
}(utils_1.SpeakeasyBase));
exports.GetRecords200ApplicationJson11 = GetRecords200ApplicationJson11;
var GetRecordsRequest = /** @class */ (function (_super) {
    __extends(GetRecordsRequest, _super);
    function GetRecordsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetRecordsQueryParams)
    ], GetRecordsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetRecordsSecurity)
    ], GetRecordsRequest.prototype, "security", void 0);
    return GetRecordsRequest;
}(utils_1.SpeakeasyBase));
exports.GetRecordsRequest = GetRecordsRequest;
var GetRecordsResponse = /** @class */ (function (_super) {
    __extends(GetRecordsResponse, _super);
    function GetRecordsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetRecordsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetRecordsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetRecordsResponse.prototype, "getRecords200ApplicationJSONOneOf", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetRecordsResponse.prototype, "getRecords403ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetRecordsResponse.prototype, "getRecords422ApplicationJSONOneOf", void 0);
    return GetRecordsResponse;
}(utils_1.SpeakeasyBase));
exports.GetRecordsResponse = GetRecordsResponse;
