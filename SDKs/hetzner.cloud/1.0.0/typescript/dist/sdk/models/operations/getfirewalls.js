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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetFirewallsResponse = exports.GetFirewallsRequest = exports.GetFirewallsFirewallsResponse = exports.GetFirewallsFirewallsResponseMeta = exports.GetFirewallsFirewallsResponseMetaPagination = exports.GetFirewallsFirewallsResponseFirewall = exports.GetFirewallsFirewallsResponseFirewallRule = exports.GetFirewallsFirewallsResponseFirewallRuleProtocolEnum = exports.GetFirewallsFirewallsResponseFirewallRuleDirectionEnum = exports.GetFirewallsFirewallsResponseFirewallAppliedTo = exports.GetFirewallsFirewallsResponseFirewallAppliedToTypeEnum = exports.GetFirewallsFirewallsResponseFirewallAppliedToServer = exports.GetFirewallsFirewallsResponseFirewallAppliedToLabelSelector = exports.GetFirewallsFirewallsResponseFirewallAppliedToAppliedToResources = exports.GetFirewallsFirewallsResponseFirewallAppliedToAppliedToResourcesTypeEnum = exports.GetFirewallsFirewallsResponseFirewallAppliedToAppliedToResourcesServer = exports.GetFirewallsQueryParams = exports.GetFirewallsSortEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetFirewallsSortEnum;
(function (GetFirewallsSortEnum) {
    GetFirewallsSortEnum["Id"] = "id";
    GetFirewallsSortEnum["IdAsc"] = "id:asc";
    GetFirewallsSortEnum["IdDesc"] = "id:desc";
    GetFirewallsSortEnum["Name"] = "name";
    GetFirewallsSortEnum["NameAsc"] = "name:asc";
    GetFirewallsSortEnum["NameDesc"] = "name:desc";
    GetFirewallsSortEnum["Created"] = "created";
    GetFirewallsSortEnum["CreatedAsc"] = "created:asc";
    GetFirewallsSortEnum["CreatedDesc"] = "created:desc";
})(GetFirewallsSortEnum = exports.GetFirewallsSortEnum || (exports.GetFirewallsSortEnum = {}));
var GetFirewallsQueryParams = /** @class */ (function (_super) {
    __extends(GetFirewallsQueryParams, _super);
    function GetFirewallsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=label_selector" }),
        __metadata("design:type", String)
    ], GetFirewallsQueryParams.prototype, "labelSelector", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], GetFirewallsQueryParams.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetFirewallsQueryParams.prototype, "sort", void 0);
    return GetFirewallsQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetFirewallsQueryParams = GetFirewallsQueryParams;
var GetFirewallsFirewallsResponseFirewallAppliedToAppliedToResourcesServer = /** @class */ (function (_super) {
    __extends(GetFirewallsFirewallsResponseFirewallAppliedToAppliedToResourcesServer, _super);
    function GetFirewallsFirewallsResponseFirewallAppliedToAppliedToResourcesServer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetFirewallsFirewallsResponseFirewallAppliedToAppliedToResourcesServer.prototype, "id", void 0);
    return GetFirewallsFirewallsResponseFirewallAppliedToAppliedToResourcesServer;
}(utils_1.SpeakeasyBase));
exports.GetFirewallsFirewallsResponseFirewallAppliedToAppliedToResourcesServer = GetFirewallsFirewallsResponseFirewallAppliedToAppliedToResourcesServer;
var GetFirewallsFirewallsResponseFirewallAppliedToAppliedToResourcesTypeEnum;
(function (GetFirewallsFirewallsResponseFirewallAppliedToAppliedToResourcesTypeEnum) {
    GetFirewallsFirewallsResponseFirewallAppliedToAppliedToResourcesTypeEnum["Server"] = "server";
})(GetFirewallsFirewallsResponseFirewallAppliedToAppliedToResourcesTypeEnum = exports.GetFirewallsFirewallsResponseFirewallAppliedToAppliedToResourcesTypeEnum || (exports.GetFirewallsFirewallsResponseFirewallAppliedToAppliedToResourcesTypeEnum = {}));
var GetFirewallsFirewallsResponseFirewallAppliedToAppliedToResources = /** @class */ (function (_super) {
    __extends(GetFirewallsFirewallsResponseFirewallAppliedToAppliedToResources, _super);
    function GetFirewallsFirewallsResponseFirewallAppliedToAppliedToResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=server" }),
        __metadata("design:type", GetFirewallsFirewallsResponseFirewallAppliedToAppliedToResourcesServer)
    ], GetFirewallsFirewallsResponseFirewallAppliedToAppliedToResources.prototype, "server", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetFirewallsFirewallsResponseFirewallAppliedToAppliedToResources.prototype, "type", void 0);
    return GetFirewallsFirewallsResponseFirewallAppliedToAppliedToResources;
}(utils_1.SpeakeasyBase));
exports.GetFirewallsFirewallsResponseFirewallAppliedToAppliedToResources = GetFirewallsFirewallsResponseFirewallAppliedToAppliedToResources;
var GetFirewallsFirewallsResponseFirewallAppliedToLabelSelector = /** @class */ (function (_super) {
    __extends(GetFirewallsFirewallsResponseFirewallAppliedToLabelSelector, _super);
    function GetFirewallsFirewallsResponseFirewallAppliedToLabelSelector() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=selector" }),
        __metadata("design:type", String)
    ], GetFirewallsFirewallsResponseFirewallAppliedToLabelSelector.prototype, "selector", void 0);
    return GetFirewallsFirewallsResponseFirewallAppliedToLabelSelector;
}(utils_1.SpeakeasyBase));
exports.GetFirewallsFirewallsResponseFirewallAppliedToLabelSelector = GetFirewallsFirewallsResponseFirewallAppliedToLabelSelector;
var GetFirewallsFirewallsResponseFirewallAppliedToServer = /** @class */ (function (_super) {
    __extends(GetFirewallsFirewallsResponseFirewallAppliedToServer, _super);
    function GetFirewallsFirewallsResponseFirewallAppliedToServer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetFirewallsFirewallsResponseFirewallAppliedToServer.prototype, "id", void 0);
    return GetFirewallsFirewallsResponseFirewallAppliedToServer;
}(utils_1.SpeakeasyBase));
exports.GetFirewallsFirewallsResponseFirewallAppliedToServer = GetFirewallsFirewallsResponseFirewallAppliedToServer;
var GetFirewallsFirewallsResponseFirewallAppliedToTypeEnum;
(function (GetFirewallsFirewallsResponseFirewallAppliedToTypeEnum) {
    GetFirewallsFirewallsResponseFirewallAppliedToTypeEnum["Server"] = "server";
    GetFirewallsFirewallsResponseFirewallAppliedToTypeEnum["LabelSelector"] = "label_selector";
})(GetFirewallsFirewallsResponseFirewallAppliedToTypeEnum = exports.GetFirewallsFirewallsResponseFirewallAppliedToTypeEnum || (exports.GetFirewallsFirewallsResponseFirewallAppliedToTypeEnum = {}));
var GetFirewallsFirewallsResponseFirewallAppliedTo = /** @class */ (function (_super) {
    __extends(GetFirewallsFirewallsResponseFirewallAppliedTo, _super);
    function GetFirewallsFirewallsResponseFirewallAppliedTo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=applied_to_resources", elemType: GetFirewallsFirewallsResponseFirewallAppliedToAppliedToResources }),
        __metadata("design:type", Array)
    ], GetFirewallsFirewallsResponseFirewallAppliedTo.prototype, "appliedToResources", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=label_selector" }),
        __metadata("design:type", GetFirewallsFirewallsResponseFirewallAppliedToLabelSelector)
    ], GetFirewallsFirewallsResponseFirewallAppliedTo.prototype, "labelSelector", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=server" }),
        __metadata("design:type", GetFirewallsFirewallsResponseFirewallAppliedToServer)
    ], GetFirewallsFirewallsResponseFirewallAppliedTo.prototype, "server", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetFirewallsFirewallsResponseFirewallAppliedTo.prototype, "type", void 0);
    return GetFirewallsFirewallsResponseFirewallAppliedTo;
}(utils_1.SpeakeasyBase));
exports.GetFirewallsFirewallsResponseFirewallAppliedTo = GetFirewallsFirewallsResponseFirewallAppliedTo;
var GetFirewallsFirewallsResponseFirewallRuleDirectionEnum;
(function (GetFirewallsFirewallsResponseFirewallRuleDirectionEnum) {
    GetFirewallsFirewallsResponseFirewallRuleDirectionEnum["In"] = "in";
    GetFirewallsFirewallsResponseFirewallRuleDirectionEnum["Out"] = "out";
})(GetFirewallsFirewallsResponseFirewallRuleDirectionEnum = exports.GetFirewallsFirewallsResponseFirewallRuleDirectionEnum || (exports.GetFirewallsFirewallsResponseFirewallRuleDirectionEnum = {}));
var GetFirewallsFirewallsResponseFirewallRuleProtocolEnum;
(function (GetFirewallsFirewallsResponseFirewallRuleProtocolEnum) {
    GetFirewallsFirewallsResponseFirewallRuleProtocolEnum["Tcp"] = "tcp";
    GetFirewallsFirewallsResponseFirewallRuleProtocolEnum["Udp"] = "udp";
    GetFirewallsFirewallsResponseFirewallRuleProtocolEnum["Icmp"] = "icmp";
    GetFirewallsFirewallsResponseFirewallRuleProtocolEnum["Esp"] = "esp";
    GetFirewallsFirewallsResponseFirewallRuleProtocolEnum["Gre"] = "gre";
})(GetFirewallsFirewallsResponseFirewallRuleProtocolEnum = exports.GetFirewallsFirewallsResponseFirewallRuleProtocolEnum || (exports.GetFirewallsFirewallsResponseFirewallRuleProtocolEnum = {}));
var GetFirewallsFirewallsResponseFirewallRule = /** @class */ (function (_super) {
    __extends(GetFirewallsFirewallsResponseFirewallRule, _super);
    function GetFirewallsFirewallsResponseFirewallRule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetFirewallsFirewallsResponseFirewallRule.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=destination_ips" }),
        __metadata("design:type", Array)
    ], GetFirewallsFirewallsResponseFirewallRule.prototype, "destinationIps", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=direction" }),
        __metadata("design:type", String)
    ], GetFirewallsFirewallsResponseFirewallRule.prototype, "direction", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=port" }),
        __metadata("design:type", String)
    ], GetFirewallsFirewallsResponseFirewallRule.prototype, "port", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=protocol" }),
        __metadata("design:type", String)
    ], GetFirewallsFirewallsResponseFirewallRule.prototype, "protocol", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=source_ips" }),
        __metadata("design:type", Array)
    ], GetFirewallsFirewallsResponseFirewallRule.prototype, "sourceIps", void 0);
    return GetFirewallsFirewallsResponseFirewallRule;
}(utils_1.SpeakeasyBase));
exports.GetFirewallsFirewallsResponseFirewallRule = GetFirewallsFirewallsResponseFirewallRule;
var GetFirewallsFirewallsResponseFirewall = /** @class */ (function (_super) {
    __extends(GetFirewallsFirewallsResponseFirewall, _super);
    function GetFirewallsFirewallsResponseFirewall() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=applied_to", elemType: GetFirewallsFirewallsResponseFirewallAppliedTo }),
        __metadata("design:type", Array)
    ], GetFirewallsFirewallsResponseFirewall.prototype, "appliedTo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created" }),
        __metadata("design:type", String)
    ], GetFirewallsFirewallsResponseFirewall.prototype, "created", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetFirewallsFirewallsResponseFirewall.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=labels" }),
        __metadata("design:type", Object)
    ], GetFirewallsFirewallsResponseFirewall.prototype, "labels", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetFirewallsFirewallsResponseFirewall.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rules", elemType: GetFirewallsFirewallsResponseFirewallRule }),
        __metadata("design:type", Array)
    ], GetFirewallsFirewallsResponseFirewall.prototype, "rules", void 0);
    return GetFirewallsFirewallsResponseFirewall;
}(utils_1.SpeakeasyBase));
exports.GetFirewallsFirewallsResponseFirewall = GetFirewallsFirewallsResponseFirewall;
var GetFirewallsFirewallsResponseMetaPagination = /** @class */ (function (_super) {
    __extends(GetFirewallsFirewallsResponseMetaPagination, _super);
    function GetFirewallsFirewallsResponseMetaPagination() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last_page" }),
        __metadata("design:type", Number)
    ], GetFirewallsFirewallsResponseMetaPagination.prototype, "lastPage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page" }),
        __metadata("design:type", Number)
    ], GetFirewallsFirewallsResponseMetaPagination.prototype, "nextPage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], GetFirewallsFirewallsResponseMetaPagination.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=per_page" }),
        __metadata("design:type", Number)
    ], GetFirewallsFirewallsResponseMetaPagination.prototype, "perPage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous_page" }),
        __metadata("design:type", Number)
    ], GetFirewallsFirewallsResponseMetaPagination.prototype, "previousPage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_entries" }),
        __metadata("design:type", Number)
    ], GetFirewallsFirewallsResponseMetaPagination.prototype, "totalEntries", void 0);
    return GetFirewallsFirewallsResponseMetaPagination;
}(utils_1.SpeakeasyBase));
exports.GetFirewallsFirewallsResponseMetaPagination = GetFirewallsFirewallsResponseMetaPagination;
var GetFirewallsFirewallsResponseMeta = /** @class */ (function (_super) {
    __extends(GetFirewallsFirewallsResponseMeta, _super);
    function GetFirewallsFirewallsResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pagination" }),
        __metadata("design:type", GetFirewallsFirewallsResponseMetaPagination)
    ], GetFirewallsFirewallsResponseMeta.prototype, "pagination", void 0);
    return GetFirewallsFirewallsResponseMeta;
}(utils_1.SpeakeasyBase));
exports.GetFirewallsFirewallsResponseMeta = GetFirewallsFirewallsResponseMeta;
var GetFirewallsFirewallsResponse = /** @class */ (function (_super) {
    __extends(GetFirewallsFirewallsResponse, _super);
    function GetFirewallsFirewallsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=firewalls", elemType: GetFirewallsFirewallsResponseFirewall }),
        __metadata("design:type", Array)
    ], GetFirewallsFirewallsResponse.prototype, "firewalls", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", GetFirewallsFirewallsResponseMeta)
    ], GetFirewallsFirewallsResponse.prototype, "meta", void 0);
    return GetFirewallsFirewallsResponse;
}(utils_1.SpeakeasyBase));
exports.GetFirewallsFirewallsResponse = GetFirewallsFirewallsResponse;
var GetFirewallsRequest = /** @class */ (function (_super) {
    __extends(GetFirewallsRequest, _super);
    function GetFirewallsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetFirewallsQueryParams)
    ], GetFirewallsRequest.prototype, "queryParams", void 0);
    return GetFirewallsRequest;
}(utils_1.SpeakeasyBase));
exports.GetFirewallsRequest = GetFirewallsRequest;
var GetFirewallsResponse = /** @class */ (function (_super) {
    __extends(GetFirewallsResponse, _super);
    function GetFirewallsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetFirewallsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetFirewallsFirewallsResponse)
    ], GetFirewallsResponse.prototype, "firewallsResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetFirewallsResponse.prototype, "statusCode", void 0);
    return GetFirewallsResponse;
}(utils_1.SpeakeasyBase));
exports.GetFirewallsResponse = GetFirewallsResponse;
