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
exports.SendTokenRequest = exports.SendTokenRequestTo = exports.SendTokenRequestMetadata = exports.SendTokenRequestMetadataUserData = exports.SendTokenRequestMetadataUserDataMeta = exports.SendTokenRequestMetadataUrls = exports.SendTokenRequestMetadataRules = exports.SendTokenRequestMetadataRulesHolders = exports.SendTokenRequestMetadataRulesFees = exports.SendTokenRequestMetadataRulesFeesItems = exports.SendTokenRequestMetadataRulesExpiration = exports.SendTokenRequestMetadataEncryptions = exports.SendTokenRequestFlags = void 0;
var utils_1 = require("../../../internal/utils");
// SendTokenRequestFlags
/**
 * Object representing flags that potentialy modify this transaction
**/
var SendTokenRequestFlags = /** @class */ (function (_super) {
    __extends(SendTokenRequestFlags, _super);
    function SendTokenRequestFlags() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=splitChange" }),
        __metadata("design:type", Boolean)
    ], SendTokenRequestFlags.prototype, "splitChange", void 0);
    return SendTokenRequestFlags;
}(utils_1.SpeakeasyBase));
exports.SendTokenRequestFlags = SendTokenRequestFlags;
var SendTokenRequestMetadataEncryptions = /** @class */ (function (_super) {
    __extends(SendTokenRequestMetadataEncryptions, _super);
    function SendTokenRequestMetadataEncryptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], SendTokenRequestMetadataEncryptions.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], SendTokenRequestMetadataEncryptions.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pubkey" }),
        __metadata("design:type", String)
    ], SendTokenRequestMetadataEncryptions.prototype, "pubkey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], SendTokenRequestMetadataEncryptions.prototype, "type", void 0);
    return SendTokenRequestMetadataEncryptions;
}(utils_1.SpeakeasyBase));
exports.SendTokenRequestMetadataEncryptions = SendTokenRequestMetadataEncryptions;
// SendTokenRequestMetadataRulesExpiration
/**
 * Object describing expiration rules of the token
**/
var SendTokenRequestMetadataRulesExpiration = /** @class */ (function (_super) {
    __extends(SendTokenRequestMetadataRulesExpiration, _super);
    function SendTokenRequestMetadataRulesExpiration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=locked" }),
        __metadata("design:type", Boolean)
    ], SendTokenRequestMetadataRulesExpiration.prototype, "locked", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=validUntil" }),
        __metadata("design:type", Number)
    ], SendTokenRequestMetadataRulesExpiration.prototype, "validUntil", void 0);
    return SendTokenRequestMetadataRulesExpiration;
}(utils_1.SpeakeasyBase));
exports.SendTokenRequestMetadataRulesExpiration = SendTokenRequestMetadataRulesExpiration;
var SendTokenRequestMetadataRulesFeesItems = /** @class */ (function (_super) {
    __extends(SendTokenRequestMetadataRulesFeesItems, _super);
    function SendTokenRequestMetadataRulesFeesItems() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=address" }),
        __metadata("design:type", String)
    ], SendTokenRequestMetadataRulesFeesItems.prototype, "address", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tokenId" }),
        __metadata("design:type", String)
    ], SendTokenRequestMetadataRulesFeesItems.prototype, "tokenId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], SendTokenRequestMetadataRulesFeesItems.prototype, "value", void 0);
    return SendTokenRequestMetadataRulesFeesItems;
}(utils_1.SpeakeasyBase));
exports.SendTokenRequestMetadataRulesFeesItems = SendTokenRequestMetadataRulesFeesItems;
var SendTokenRequestMetadataRulesFees = /** @class */ (function (_super) {
    __extends(SendTokenRequestMetadataRulesFees, _super);
    function SendTokenRequestMetadataRulesFees() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=items", elemType: SendTokenRequestMetadataRulesFeesItems }),
        __metadata("design:type", Array)
    ], SendTokenRequestMetadataRulesFees.prototype, "items", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=locked" }),
        __metadata("design:type", Boolean)
    ], SendTokenRequestMetadataRulesFees.prototype, "locked", void 0);
    return SendTokenRequestMetadataRulesFees;
}(utils_1.SpeakeasyBase));
exports.SendTokenRequestMetadataRulesFees = SendTokenRequestMetadataRulesFees;
var SendTokenRequestMetadataRulesHolders = /** @class */ (function (_super) {
    __extends(SendTokenRequestMetadataRulesHolders, _super);
    function SendTokenRequestMetadataRulesHolders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=address" }),
        __metadata("design:type", String)
    ], SendTokenRequestMetadataRulesHolders.prototype, "address", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=locked" }),
        __metadata("design:type", Boolean)
    ], SendTokenRequestMetadataRulesHolders.prototype, "locked", void 0);
    return SendTokenRequestMetadataRulesHolders;
}(utils_1.SpeakeasyBase));
exports.SendTokenRequestMetadataRulesHolders = SendTokenRequestMetadataRulesHolders;
// SendTokenRequestMetadataRules
/**
 * Object describing token rules
**/
var SendTokenRequestMetadataRules = /** @class */ (function (_super) {
    __extends(SendTokenRequestMetadataRules, _super);
    function SendTokenRequestMetadataRules() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=expiration" }),
        __metadata("design:type", SendTokenRequestMetadataRulesExpiration)
    ], SendTokenRequestMetadataRules.prototype, "expiration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=fees" }),
        __metadata("design:type", SendTokenRequestMetadataRulesFees)
    ], SendTokenRequestMetadataRules.prototype, "fees", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=holders", elemType: SendTokenRequestMetadataRulesHolders }),
        __metadata("design:type", Array)
    ], SendTokenRequestMetadataRules.prototype, "holders", void 0);
    return SendTokenRequestMetadataRules;
}(utils_1.SpeakeasyBase));
exports.SendTokenRequestMetadataRules = SendTokenRequestMetadataRules;
var SendTokenRequestMetadataUrls = /** @class */ (function (_super) {
    __extends(SendTokenRequestMetadataUrls, _super);
    function SendTokenRequestMetadataUrls() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dataHash" }),
        __metadata("design:type", String)
    ], SendTokenRequestMetadataUrls.prototype, "dataHash", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mimeType" }),
        __metadata("design:type", String)
    ], SendTokenRequestMetadataUrls.prototype, "mimeType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], SendTokenRequestMetadataUrls.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], SendTokenRequestMetadataUrls.prototype, "url", void 0);
    return SendTokenRequestMetadataUrls;
}(utils_1.SpeakeasyBase));
exports.SendTokenRequestMetadataUrls = SendTokenRequestMetadataUrls;
var SendTokenRequestMetadataUserDataMeta = /** @class */ (function (_super) {
    __extends(SendTokenRequestMetadataUserDataMeta, _super);
    function SendTokenRequestMetadataUserDataMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], SendTokenRequestMetadataUserDataMeta.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], SendTokenRequestMetadataUserDataMeta.prototype, "value", void 0);
    return SendTokenRequestMetadataUserDataMeta;
}(utils_1.SpeakeasyBase));
exports.SendTokenRequestMetadataUserDataMeta = SendTokenRequestMetadataUserDataMeta;
// SendTokenRequestMetadataUserData
/**
 * Metadata set by user on token
**/
var SendTokenRequestMetadataUserData = /** @class */ (function (_super) {
    __extends(SendTokenRequestMetadataUserData, _super);
    function SendTokenRequestMetadataUserData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta", elemType: SendTokenRequestMetadataUserDataMeta }),
        __metadata("design:type", Array)
    ], SendTokenRequestMetadataUserData.prototype, "meta", void 0);
    return SendTokenRequestMetadataUserData;
}(utils_1.SpeakeasyBase));
exports.SendTokenRequestMetadataUserData = SendTokenRequestMetadataUserData;
// SendTokenRequestMetadata
/**
 * Object representing all metadata at token issuance
**/
var SendTokenRequestMetadata = /** @class */ (function (_super) {
    __extends(SendTokenRequestMetadata, _super);
    function SendTokenRequestMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], SendTokenRequestMetadata.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=encryptions", elemType: SendTokenRequestMetadataEncryptions }),
        __metadata("design:type", Array)
    ], SendTokenRequestMetadata.prototype, "encryptions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=issuer" }),
        __metadata("design:type", String)
    ], SendTokenRequestMetadata.prototype, "issuer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rules" }),
        __metadata("design:type", SendTokenRequestMetadataRules)
    ], SendTokenRequestMetadata.prototype, "rules", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tokenName" }),
        __metadata("design:type", String)
    ], SendTokenRequestMetadata.prototype, "tokenName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=urls", elemType: SendTokenRequestMetadataUrls }),
        __metadata("design:type", Array)
    ], SendTokenRequestMetadata.prototype, "urls", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=userData" }),
        __metadata("design:type", SendTokenRequestMetadataUserData)
    ], SendTokenRequestMetadata.prototype, "userData", void 0);
    return SendTokenRequestMetadata;
}(utils_1.SpeakeasyBase));
exports.SendTokenRequestMetadata = SendTokenRequestMetadata;
var SendTokenRequestTo = /** @class */ (function (_super) {
    __extends(SendTokenRequestTo, _super);
    function SendTokenRequestTo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=address" }),
        __metadata("design:type", String)
    ], SendTokenRequestTo.prototype, "address", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], SendTokenRequestTo.prototype, "amount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tokenId" }),
        __metadata("design:type", String)
    ], SendTokenRequestTo.prototype, "tokenId", void 0);
    return SendTokenRequestTo;
}(utils_1.SpeakeasyBase));
exports.SendTokenRequestTo = SendTokenRequestTo;
var SendTokenRequest = /** @class */ (function (_super) {
    __extends(SendTokenRequest, _super);
    function SendTokenRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=fee" }),
        __metadata("design:type", Number)
    ], SendTokenRequest.prototype, "fee", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=flags" }),
        __metadata("design:type", SendTokenRequestFlags)
    ], SendTokenRequest.prototype, "flags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=from" }),
        __metadata("design:type", Array)
    ], SendTokenRequest.prototype, "from", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=metadata" }),
        __metadata("design:type", SendTokenRequestMetadata)
    ], SendTokenRequest.prototype, "metadata", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sendutxo" }),
        __metadata("design:type", Array)
    ], SendTokenRequest.prototype, "sendutxo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=to", elemType: SendTokenRequestTo }),
        __metadata("design:type", Array)
    ], SendTokenRequest.prototype, "to", void 0);
    return SendTokenRequest;
}(utils_1.SpeakeasyBase));
exports.SendTokenRequest = SendTokenRequest;
