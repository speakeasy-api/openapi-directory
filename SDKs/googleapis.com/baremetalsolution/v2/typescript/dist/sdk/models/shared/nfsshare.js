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
exports.NfsShareInput = exports.NfsShare = exports.NfsShareStorageTypeEnum = exports.NfsShareStateEnum = void 0;
var utils_1 = require("../../../internal/utils");
var allowedclient_1 = require("./allowedclient");
var allowedclient_2 = require("./allowedclient");
var NfsShareStateEnum;
(function (NfsShareStateEnum) {
    NfsShareStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    NfsShareStateEnum["Provisioned"] = "PROVISIONED";
    NfsShareStateEnum["Creating"] = "CREATING";
    NfsShareStateEnum["Updating"] = "UPDATING";
    NfsShareStateEnum["Deleting"] = "DELETING";
})(NfsShareStateEnum = exports.NfsShareStateEnum || (exports.NfsShareStateEnum = {}));
var NfsShareStorageTypeEnum;
(function (NfsShareStorageTypeEnum) {
    NfsShareStorageTypeEnum["StorageTypeUnspecified"] = "STORAGE_TYPE_UNSPECIFIED";
    NfsShareStorageTypeEnum["Ssd"] = "SSD";
    NfsShareStorageTypeEnum["Hdd"] = "HDD";
})(NfsShareStorageTypeEnum = exports.NfsShareStorageTypeEnum || (exports.NfsShareStorageTypeEnum = {}));
// NfsShare
/**
 * An NFS share.
**/
var NfsShare = /** @class */ (function (_super) {
    __extends(NfsShare, _super);
    function NfsShare() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allowedClients", elemType: allowedclient_1.AllowedClient }),
        __metadata("design:type", Array)
    ], NfsShare.prototype, "allowedClients", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], NfsShare.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=labels" }),
        __metadata("design:type", Object)
    ], NfsShare.prototype, "labels", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], NfsShare.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=nfsShareId" }),
        __metadata("design:type", String)
    ], NfsShare.prototype, "nfsShareId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=requestedSizeGib" }),
        __metadata("design:type", String)
    ], NfsShare.prototype, "requestedSizeGib", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], NfsShare.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=storageType" }),
        __metadata("design:type", String)
    ], NfsShare.prototype, "storageType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=volume" }),
        __metadata("design:type", String)
    ], NfsShare.prototype, "volume", void 0);
    return NfsShare;
}(utils_1.SpeakeasyBase));
exports.NfsShare = NfsShare;
// NfsShareInput
/**
 * An NFS share.
**/
var NfsShareInput = /** @class */ (function (_super) {
    __extends(NfsShareInput, _super);
    function NfsShareInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allowedClients", elemType: allowedclient_2.AllowedClientInput }),
        __metadata("design:type", Array)
    ], NfsShareInput.prototype, "allowedClients", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=labels" }),
        __metadata("design:type", Object)
    ], NfsShareInput.prototype, "labels", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], NfsShareInput.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=requestedSizeGib" }),
        __metadata("design:type", String)
    ], NfsShareInput.prototype, "requestedSizeGib", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=storageType" }),
        __metadata("design:type", String)
    ], NfsShareInput.prototype, "storageType", void 0);
    return NfsShareInput;
}(utils_1.SpeakeasyBase));
exports.NfsShareInput = NfsShareInput;
