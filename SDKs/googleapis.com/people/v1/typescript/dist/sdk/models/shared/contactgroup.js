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
exports.ContactGroupInput = exports.ContactGroup = exports.ContactGroupGroupTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var groupclientdata_1 = require("./groupclientdata");
var contactgroupmetadata_1 = require("./contactgroupmetadata");
var ContactGroupGroupTypeEnum;
(function (ContactGroupGroupTypeEnum) {
    ContactGroupGroupTypeEnum["GroupTypeUnspecified"] = "GROUP_TYPE_UNSPECIFIED";
    ContactGroupGroupTypeEnum["UserContactGroup"] = "USER_CONTACT_GROUP";
    ContactGroupGroupTypeEnum["SystemContactGroup"] = "SYSTEM_CONTACT_GROUP";
})(ContactGroupGroupTypeEnum = exports.ContactGroupGroupTypeEnum || (exports.ContactGroupGroupTypeEnum = {}));
// ContactGroup
/**
 * A contact group.
**/
var ContactGroup = /** @class */ (function (_super) {
    __extends(ContactGroup, _super);
    function ContactGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=clientData", elemType: groupclientdata_1.GroupClientData }),
        __metadata("design:type", Array)
    ], ContactGroup.prototype, "clientData", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], ContactGroup.prototype, "etag", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=formattedName" }),
        __metadata("design:type", String)
    ], ContactGroup.prototype, "formattedName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=groupType" }),
        __metadata("design:type", String)
    ], ContactGroup.prototype, "groupType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=memberCount" }),
        __metadata("design:type", Number)
    ], ContactGroup.prototype, "memberCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=memberResourceNames" }),
        __metadata("design:type", Array)
    ], ContactGroup.prototype, "memberResourceNames", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=metadata" }),
        __metadata("design:type", contactgroupmetadata_1.ContactGroupMetadata)
    ], ContactGroup.prototype, "metadata", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ContactGroup.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resourceName" }),
        __metadata("design:type", String)
    ], ContactGroup.prototype, "resourceName", void 0);
    return ContactGroup;
}(utils_1.SpeakeasyBase));
exports.ContactGroup = ContactGroup;
// ContactGroupInput
/**
 * A contact group.
**/
var ContactGroupInput = /** @class */ (function (_super) {
    __extends(ContactGroupInput, _super);
    function ContactGroupInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=clientData", elemType: groupclientdata_1.GroupClientData }),
        __metadata("design:type", Array)
    ], ContactGroupInput.prototype, "clientData", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], ContactGroupInput.prototype, "etag", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ContactGroupInput.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resourceName" }),
        __metadata("design:type", String)
    ], ContactGroupInput.prototype, "resourceName", void 0);
    return ContactGroupInput;
}(utils_1.SpeakeasyBase));
exports.ContactGroupInput = ContactGroupInput;
