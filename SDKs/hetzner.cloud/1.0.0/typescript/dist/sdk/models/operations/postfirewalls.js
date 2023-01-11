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
exports.PostFirewallsResponse = exports.PostFirewallsRequest = exports.PostFirewallsCreateFirewallResponse = exports.PostFirewallsCreateFirewallResponseFirewall = exports.PostFirewallsCreateFirewallResponseFirewallRule = exports.PostFirewallsCreateFirewallResponseFirewallRuleProtocolEnum = exports.PostFirewallsCreateFirewallResponseFirewallRuleDirectionEnum = exports.PostFirewallsCreateFirewallResponseFirewallAppliedTo = exports.PostFirewallsCreateFirewallResponseFirewallAppliedToTypeEnum = exports.PostFirewallsCreateFirewallResponseFirewallAppliedToServer = exports.PostFirewallsCreateFirewallResponseFirewallAppliedToLabelSelector = exports.PostFirewallsCreateFirewallResponseFirewallAppliedToAppliedToResources = exports.PostFirewallsCreateFirewallResponseFirewallAppliedToAppliedToResourcesTypeEnum = exports.PostFirewallsCreateFirewallResponseFirewallAppliedToAppliedToResourcesServer = exports.PostFirewallsCreateFirewallResponseAction = exports.PostFirewallsCreateFirewallResponseActionStatusEnum = exports.PostFirewallsCreateFirewallResponseActionResources = exports.PostFirewallsCreateFirewallResponseActionError = exports.PostFirewallsCreateFirewallRequest = exports.PostFirewallsCreateFirewallRequestRule = exports.PostFirewallsCreateFirewallRequestRuleProtocolEnum = exports.PostFirewallsCreateFirewallRequestRuleDirectionEnum = exports.PostFirewallsCreateFirewallRequestApplyTo = exports.PostFirewallsCreateFirewallRequestApplyToTypeEnum = exports.PostFirewallsCreateFirewallRequestApplyToServer = exports.PostFirewallsCreateFirewallRequestApplyToLabelSelector = void 0;
var utils_1 = require("../../../internal/utils");
// PostFirewallsCreateFirewallRequestApplyToLabelSelector
/**
 * Configuration for type LabelSelector, required if type is `label_selector`
**/
var PostFirewallsCreateFirewallRequestApplyToLabelSelector = /** @class */ (function (_super) {
    __extends(PostFirewallsCreateFirewallRequestApplyToLabelSelector, _super);
    function PostFirewallsCreateFirewallRequestApplyToLabelSelector() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=selector" }),
        __metadata("design:type", String)
    ], PostFirewallsCreateFirewallRequestApplyToLabelSelector.prototype, "selector", void 0);
    return PostFirewallsCreateFirewallRequestApplyToLabelSelector;
}(utils_1.SpeakeasyBase));
exports.PostFirewallsCreateFirewallRequestApplyToLabelSelector = PostFirewallsCreateFirewallRequestApplyToLabelSelector;
// PostFirewallsCreateFirewallRequestApplyToServer
/**
 * Configuration for type Server, required if type is `server`
**/
var PostFirewallsCreateFirewallRequestApplyToServer = /** @class */ (function (_super) {
    __extends(PostFirewallsCreateFirewallRequestApplyToServer, _super);
    function PostFirewallsCreateFirewallRequestApplyToServer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostFirewallsCreateFirewallRequestApplyToServer.prototype, "id", void 0);
    return PostFirewallsCreateFirewallRequestApplyToServer;
}(utils_1.SpeakeasyBase));
exports.PostFirewallsCreateFirewallRequestApplyToServer = PostFirewallsCreateFirewallRequestApplyToServer;
var PostFirewallsCreateFirewallRequestApplyToTypeEnum;
(function (PostFirewallsCreateFirewallRequestApplyToTypeEnum) {
    PostFirewallsCreateFirewallRequestApplyToTypeEnum["Server"] = "server";
    PostFirewallsCreateFirewallRequestApplyToTypeEnum["LabelSelector"] = "label_selector";
})(PostFirewallsCreateFirewallRequestApplyToTypeEnum = exports.PostFirewallsCreateFirewallRequestApplyToTypeEnum || (exports.PostFirewallsCreateFirewallRequestApplyToTypeEnum = {}));
var PostFirewallsCreateFirewallRequestApplyTo = /** @class */ (function (_super) {
    __extends(PostFirewallsCreateFirewallRequestApplyTo, _super);
    function PostFirewallsCreateFirewallRequestApplyTo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=label_selector" }),
        __metadata("design:type", PostFirewallsCreateFirewallRequestApplyToLabelSelector)
    ], PostFirewallsCreateFirewallRequestApplyTo.prototype, "labelSelector", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=server" }),
        __metadata("design:type", PostFirewallsCreateFirewallRequestApplyToServer)
    ], PostFirewallsCreateFirewallRequestApplyTo.prototype, "server", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostFirewallsCreateFirewallRequestApplyTo.prototype, "type", void 0);
    return PostFirewallsCreateFirewallRequestApplyTo;
}(utils_1.SpeakeasyBase));
exports.PostFirewallsCreateFirewallRequestApplyTo = PostFirewallsCreateFirewallRequestApplyTo;
var PostFirewallsCreateFirewallRequestRuleDirectionEnum;
(function (PostFirewallsCreateFirewallRequestRuleDirectionEnum) {
    PostFirewallsCreateFirewallRequestRuleDirectionEnum["In"] = "in";
    PostFirewallsCreateFirewallRequestRuleDirectionEnum["Out"] = "out";
})(PostFirewallsCreateFirewallRequestRuleDirectionEnum = exports.PostFirewallsCreateFirewallRequestRuleDirectionEnum || (exports.PostFirewallsCreateFirewallRequestRuleDirectionEnum = {}));
var PostFirewallsCreateFirewallRequestRuleProtocolEnum;
(function (PostFirewallsCreateFirewallRequestRuleProtocolEnum) {
    PostFirewallsCreateFirewallRequestRuleProtocolEnum["Tcp"] = "tcp";
    PostFirewallsCreateFirewallRequestRuleProtocolEnum["Udp"] = "udp";
    PostFirewallsCreateFirewallRequestRuleProtocolEnum["Icmp"] = "icmp";
    PostFirewallsCreateFirewallRequestRuleProtocolEnum["Esp"] = "esp";
    PostFirewallsCreateFirewallRequestRuleProtocolEnum["Gre"] = "gre";
})(PostFirewallsCreateFirewallRequestRuleProtocolEnum = exports.PostFirewallsCreateFirewallRequestRuleProtocolEnum || (exports.PostFirewallsCreateFirewallRequestRuleProtocolEnum = {}));
var PostFirewallsCreateFirewallRequestRule = /** @class */ (function (_super) {
    __extends(PostFirewallsCreateFirewallRequestRule, _super);
    function PostFirewallsCreateFirewallRequestRule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], PostFirewallsCreateFirewallRequestRule.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=destination_ips" }),
        __metadata("design:type", Array)
    ], PostFirewallsCreateFirewallRequestRule.prototype, "destinationIps", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=direction" }),
        __metadata("design:type", String)
    ], PostFirewallsCreateFirewallRequestRule.prototype, "direction", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=port" }),
        __metadata("design:type", String)
    ], PostFirewallsCreateFirewallRequestRule.prototype, "port", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=protocol" }),
        __metadata("design:type", String)
    ], PostFirewallsCreateFirewallRequestRule.prototype, "protocol", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=source_ips" }),
        __metadata("design:type", Array)
    ], PostFirewallsCreateFirewallRequestRule.prototype, "sourceIps", void 0);
    return PostFirewallsCreateFirewallRequestRule;
}(utils_1.SpeakeasyBase));
exports.PostFirewallsCreateFirewallRequestRule = PostFirewallsCreateFirewallRequestRule;
var PostFirewallsCreateFirewallRequest = /** @class */ (function (_super) {
    __extends(PostFirewallsCreateFirewallRequest, _super);
    function PostFirewallsCreateFirewallRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=apply_to", elemType: PostFirewallsCreateFirewallRequestApplyTo }),
        __metadata("design:type", Array)
    ], PostFirewallsCreateFirewallRequest.prototype, "applyTo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=labels" }),
        __metadata("design:type", Object)
    ], PostFirewallsCreateFirewallRequest.prototype, "labels", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PostFirewallsCreateFirewallRequest.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rules", elemType: PostFirewallsCreateFirewallRequestRule }),
        __metadata("design:type", Array)
    ], PostFirewallsCreateFirewallRequest.prototype, "rules", void 0);
    return PostFirewallsCreateFirewallRequest;
}(utils_1.SpeakeasyBase));
exports.PostFirewallsCreateFirewallRequest = PostFirewallsCreateFirewallRequest;
// PostFirewallsCreateFirewallResponseActionError
/**
 * Error message for the Action if error occurred, otherwise null
**/
var PostFirewallsCreateFirewallResponseActionError = /** @class */ (function (_super) {
    __extends(PostFirewallsCreateFirewallResponseActionError, _super);
    function PostFirewallsCreateFirewallResponseActionError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], PostFirewallsCreateFirewallResponseActionError.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostFirewallsCreateFirewallResponseActionError.prototype, "message", void 0);
    return PostFirewallsCreateFirewallResponseActionError;
}(utils_1.SpeakeasyBase));
exports.PostFirewallsCreateFirewallResponseActionError = PostFirewallsCreateFirewallResponseActionError;
var PostFirewallsCreateFirewallResponseActionResources = /** @class */ (function (_super) {
    __extends(PostFirewallsCreateFirewallResponseActionResources, _super);
    function PostFirewallsCreateFirewallResponseActionResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostFirewallsCreateFirewallResponseActionResources.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostFirewallsCreateFirewallResponseActionResources.prototype, "type", void 0);
    return PostFirewallsCreateFirewallResponseActionResources;
}(utils_1.SpeakeasyBase));
exports.PostFirewallsCreateFirewallResponseActionResources = PostFirewallsCreateFirewallResponseActionResources;
var PostFirewallsCreateFirewallResponseActionStatusEnum;
(function (PostFirewallsCreateFirewallResponseActionStatusEnum) {
    PostFirewallsCreateFirewallResponseActionStatusEnum["Success"] = "success";
    PostFirewallsCreateFirewallResponseActionStatusEnum["Running"] = "running";
    PostFirewallsCreateFirewallResponseActionStatusEnum["Error"] = "error";
})(PostFirewallsCreateFirewallResponseActionStatusEnum = exports.PostFirewallsCreateFirewallResponseActionStatusEnum || (exports.PostFirewallsCreateFirewallResponseActionStatusEnum = {}));
var PostFirewallsCreateFirewallResponseAction = /** @class */ (function (_super) {
    __extends(PostFirewallsCreateFirewallResponseAction, _super);
    function PostFirewallsCreateFirewallResponseAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=command" }),
        __metadata("design:type", String)
    ], PostFirewallsCreateFirewallResponseAction.prototype, "command", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", PostFirewallsCreateFirewallResponseActionError)
    ], PostFirewallsCreateFirewallResponseAction.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=finished" }),
        __metadata("design:type", String)
    ], PostFirewallsCreateFirewallResponseAction.prototype, "finished", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostFirewallsCreateFirewallResponseAction.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=progress" }),
        __metadata("design:type", Number)
    ], PostFirewallsCreateFirewallResponseAction.prototype, "progress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resources", elemType: PostFirewallsCreateFirewallResponseActionResources }),
        __metadata("design:type", Array)
    ], PostFirewallsCreateFirewallResponseAction.prototype, "resources", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=started" }),
        __metadata("design:type", String)
    ], PostFirewallsCreateFirewallResponseAction.prototype, "started", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PostFirewallsCreateFirewallResponseAction.prototype, "status", void 0);
    return PostFirewallsCreateFirewallResponseAction;
}(utils_1.SpeakeasyBase));
exports.PostFirewallsCreateFirewallResponseAction = PostFirewallsCreateFirewallResponseAction;
var PostFirewallsCreateFirewallResponseFirewallAppliedToAppliedToResourcesServer = /** @class */ (function (_super) {
    __extends(PostFirewallsCreateFirewallResponseFirewallAppliedToAppliedToResourcesServer, _super);
    function PostFirewallsCreateFirewallResponseFirewallAppliedToAppliedToResourcesServer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostFirewallsCreateFirewallResponseFirewallAppliedToAppliedToResourcesServer.prototype, "id", void 0);
    return PostFirewallsCreateFirewallResponseFirewallAppliedToAppliedToResourcesServer;
}(utils_1.SpeakeasyBase));
exports.PostFirewallsCreateFirewallResponseFirewallAppliedToAppliedToResourcesServer = PostFirewallsCreateFirewallResponseFirewallAppliedToAppliedToResourcesServer;
var PostFirewallsCreateFirewallResponseFirewallAppliedToAppliedToResourcesTypeEnum;
(function (PostFirewallsCreateFirewallResponseFirewallAppliedToAppliedToResourcesTypeEnum) {
    PostFirewallsCreateFirewallResponseFirewallAppliedToAppliedToResourcesTypeEnum["Server"] = "server";
})(PostFirewallsCreateFirewallResponseFirewallAppliedToAppliedToResourcesTypeEnum = exports.PostFirewallsCreateFirewallResponseFirewallAppliedToAppliedToResourcesTypeEnum || (exports.PostFirewallsCreateFirewallResponseFirewallAppliedToAppliedToResourcesTypeEnum = {}));
var PostFirewallsCreateFirewallResponseFirewallAppliedToAppliedToResources = /** @class */ (function (_super) {
    __extends(PostFirewallsCreateFirewallResponseFirewallAppliedToAppliedToResources, _super);
    function PostFirewallsCreateFirewallResponseFirewallAppliedToAppliedToResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=server" }),
        __metadata("design:type", PostFirewallsCreateFirewallResponseFirewallAppliedToAppliedToResourcesServer)
    ], PostFirewallsCreateFirewallResponseFirewallAppliedToAppliedToResources.prototype, "server", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostFirewallsCreateFirewallResponseFirewallAppliedToAppliedToResources.prototype, "type", void 0);
    return PostFirewallsCreateFirewallResponseFirewallAppliedToAppliedToResources;
}(utils_1.SpeakeasyBase));
exports.PostFirewallsCreateFirewallResponseFirewallAppliedToAppliedToResources = PostFirewallsCreateFirewallResponseFirewallAppliedToAppliedToResources;
var PostFirewallsCreateFirewallResponseFirewallAppliedToLabelSelector = /** @class */ (function (_super) {
    __extends(PostFirewallsCreateFirewallResponseFirewallAppliedToLabelSelector, _super);
    function PostFirewallsCreateFirewallResponseFirewallAppliedToLabelSelector() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=selector" }),
        __metadata("design:type", String)
    ], PostFirewallsCreateFirewallResponseFirewallAppliedToLabelSelector.prototype, "selector", void 0);
    return PostFirewallsCreateFirewallResponseFirewallAppliedToLabelSelector;
}(utils_1.SpeakeasyBase));
exports.PostFirewallsCreateFirewallResponseFirewallAppliedToLabelSelector = PostFirewallsCreateFirewallResponseFirewallAppliedToLabelSelector;
var PostFirewallsCreateFirewallResponseFirewallAppliedToServer = /** @class */ (function (_super) {
    __extends(PostFirewallsCreateFirewallResponseFirewallAppliedToServer, _super);
    function PostFirewallsCreateFirewallResponseFirewallAppliedToServer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostFirewallsCreateFirewallResponseFirewallAppliedToServer.prototype, "id", void 0);
    return PostFirewallsCreateFirewallResponseFirewallAppliedToServer;
}(utils_1.SpeakeasyBase));
exports.PostFirewallsCreateFirewallResponseFirewallAppliedToServer = PostFirewallsCreateFirewallResponseFirewallAppliedToServer;
var PostFirewallsCreateFirewallResponseFirewallAppliedToTypeEnum;
(function (PostFirewallsCreateFirewallResponseFirewallAppliedToTypeEnum) {
    PostFirewallsCreateFirewallResponseFirewallAppliedToTypeEnum["Server"] = "server";
    PostFirewallsCreateFirewallResponseFirewallAppliedToTypeEnum["LabelSelector"] = "label_selector";
})(PostFirewallsCreateFirewallResponseFirewallAppliedToTypeEnum = exports.PostFirewallsCreateFirewallResponseFirewallAppliedToTypeEnum || (exports.PostFirewallsCreateFirewallResponseFirewallAppliedToTypeEnum = {}));
var PostFirewallsCreateFirewallResponseFirewallAppliedTo = /** @class */ (function (_super) {
    __extends(PostFirewallsCreateFirewallResponseFirewallAppliedTo, _super);
    function PostFirewallsCreateFirewallResponseFirewallAppliedTo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=applied_to_resources", elemType: PostFirewallsCreateFirewallResponseFirewallAppliedToAppliedToResources }),
        __metadata("design:type", Array)
    ], PostFirewallsCreateFirewallResponseFirewallAppliedTo.prototype, "appliedToResources", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=label_selector" }),
        __metadata("design:type", PostFirewallsCreateFirewallResponseFirewallAppliedToLabelSelector)
    ], PostFirewallsCreateFirewallResponseFirewallAppliedTo.prototype, "labelSelector", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=server" }),
        __metadata("design:type", PostFirewallsCreateFirewallResponseFirewallAppliedToServer)
    ], PostFirewallsCreateFirewallResponseFirewallAppliedTo.prototype, "server", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostFirewallsCreateFirewallResponseFirewallAppliedTo.prototype, "type", void 0);
    return PostFirewallsCreateFirewallResponseFirewallAppliedTo;
}(utils_1.SpeakeasyBase));
exports.PostFirewallsCreateFirewallResponseFirewallAppliedTo = PostFirewallsCreateFirewallResponseFirewallAppliedTo;
var PostFirewallsCreateFirewallResponseFirewallRuleDirectionEnum;
(function (PostFirewallsCreateFirewallResponseFirewallRuleDirectionEnum) {
    PostFirewallsCreateFirewallResponseFirewallRuleDirectionEnum["In"] = "in";
    PostFirewallsCreateFirewallResponseFirewallRuleDirectionEnum["Out"] = "out";
})(PostFirewallsCreateFirewallResponseFirewallRuleDirectionEnum = exports.PostFirewallsCreateFirewallResponseFirewallRuleDirectionEnum || (exports.PostFirewallsCreateFirewallResponseFirewallRuleDirectionEnum = {}));
var PostFirewallsCreateFirewallResponseFirewallRuleProtocolEnum;
(function (PostFirewallsCreateFirewallResponseFirewallRuleProtocolEnum) {
    PostFirewallsCreateFirewallResponseFirewallRuleProtocolEnum["Tcp"] = "tcp";
    PostFirewallsCreateFirewallResponseFirewallRuleProtocolEnum["Udp"] = "udp";
    PostFirewallsCreateFirewallResponseFirewallRuleProtocolEnum["Icmp"] = "icmp";
    PostFirewallsCreateFirewallResponseFirewallRuleProtocolEnum["Esp"] = "esp";
    PostFirewallsCreateFirewallResponseFirewallRuleProtocolEnum["Gre"] = "gre";
})(PostFirewallsCreateFirewallResponseFirewallRuleProtocolEnum = exports.PostFirewallsCreateFirewallResponseFirewallRuleProtocolEnum || (exports.PostFirewallsCreateFirewallResponseFirewallRuleProtocolEnum = {}));
var PostFirewallsCreateFirewallResponseFirewallRule = /** @class */ (function (_super) {
    __extends(PostFirewallsCreateFirewallResponseFirewallRule, _super);
    function PostFirewallsCreateFirewallResponseFirewallRule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], PostFirewallsCreateFirewallResponseFirewallRule.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=destination_ips" }),
        __metadata("design:type", Array)
    ], PostFirewallsCreateFirewallResponseFirewallRule.prototype, "destinationIps", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=direction" }),
        __metadata("design:type", String)
    ], PostFirewallsCreateFirewallResponseFirewallRule.prototype, "direction", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=port" }),
        __metadata("design:type", String)
    ], PostFirewallsCreateFirewallResponseFirewallRule.prototype, "port", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=protocol" }),
        __metadata("design:type", String)
    ], PostFirewallsCreateFirewallResponseFirewallRule.prototype, "protocol", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=source_ips" }),
        __metadata("design:type", Array)
    ], PostFirewallsCreateFirewallResponseFirewallRule.prototype, "sourceIps", void 0);
    return PostFirewallsCreateFirewallResponseFirewallRule;
}(utils_1.SpeakeasyBase));
exports.PostFirewallsCreateFirewallResponseFirewallRule = PostFirewallsCreateFirewallResponseFirewallRule;
var PostFirewallsCreateFirewallResponseFirewall = /** @class */ (function (_super) {
    __extends(PostFirewallsCreateFirewallResponseFirewall, _super);
    function PostFirewallsCreateFirewallResponseFirewall() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=applied_to", elemType: PostFirewallsCreateFirewallResponseFirewallAppliedTo }),
        __metadata("design:type", Array)
    ], PostFirewallsCreateFirewallResponseFirewall.prototype, "appliedTo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created" }),
        __metadata("design:type", String)
    ], PostFirewallsCreateFirewallResponseFirewall.prototype, "created", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostFirewallsCreateFirewallResponseFirewall.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=labels" }),
        __metadata("design:type", Object)
    ], PostFirewallsCreateFirewallResponseFirewall.prototype, "labels", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PostFirewallsCreateFirewallResponseFirewall.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rules", elemType: PostFirewallsCreateFirewallResponseFirewallRule }),
        __metadata("design:type", Array)
    ], PostFirewallsCreateFirewallResponseFirewall.prototype, "rules", void 0);
    return PostFirewallsCreateFirewallResponseFirewall;
}(utils_1.SpeakeasyBase));
exports.PostFirewallsCreateFirewallResponseFirewall = PostFirewallsCreateFirewallResponseFirewall;
var PostFirewallsCreateFirewallResponse = /** @class */ (function (_super) {
    __extends(PostFirewallsCreateFirewallResponse, _super);
    function PostFirewallsCreateFirewallResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=actions", elemType: PostFirewallsCreateFirewallResponseAction }),
        __metadata("design:type", Array)
    ], PostFirewallsCreateFirewallResponse.prototype, "actions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=firewall" }),
        __metadata("design:type", PostFirewallsCreateFirewallResponseFirewall)
    ], PostFirewallsCreateFirewallResponse.prototype, "firewall", void 0);
    return PostFirewallsCreateFirewallResponse;
}(utils_1.SpeakeasyBase));
exports.PostFirewallsCreateFirewallResponse = PostFirewallsCreateFirewallResponse;
var PostFirewallsRequest = /** @class */ (function (_super) {
    __extends(PostFirewallsRequest, _super);
    function PostFirewallsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostFirewallsCreateFirewallRequest)
    ], PostFirewallsRequest.prototype, "request", void 0);
    return PostFirewallsRequest;
}(utils_1.SpeakeasyBase));
exports.PostFirewallsRequest = PostFirewallsRequest;
var PostFirewallsResponse = /** @class */ (function (_super) {
    __extends(PostFirewallsResponse, _super);
    function PostFirewallsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostFirewallsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostFirewallsCreateFirewallResponse)
    ], PostFirewallsResponse.prototype, "createFirewallResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostFirewallsResponse.prototype, "statusCode", void 0);
    return PostFirewallsResponse;
}(utils_1.SpeakeasyBase));
exports.PostFirewallsResponse = PostFirewallsResponse;
