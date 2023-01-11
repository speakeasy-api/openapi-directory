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
exports.PersonMetadataInput = exports.PersonMetadata = exports.PersonMetadataObjectTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var source_1 = require("./source");
var source_2 = require("./source");
var PersonMetadataObjectTypeEnum;
(function (PersonMetadataObjectTypeEnum) {
    PersonMetadataObjectTypeEnum["ObjectTypeUnspecified"] = "OBJECT_TYPE_UNSPECIFIED";
    PersonMetadataObjectTypeEnum["Person"] = "PERSON";
    PersonMetadataObjectTypeEnum["Page"] = "PAGE";
})(PersonMetadataObjectTypeEnum = exports.PersonMetadataObjectTypeEnum || (exports.PersonMetadataObjectTypeEnum = {}));
// PersonMetadata
/**
 * The metadata about a person.
**/
var PersonMetadata = /** @class */ (function (_super) {
    __extends(PersonMetadata, _super);
    function PersonMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deleted" }),
        __metadata("design:type", Boolean)
    ], PersonMetadata.prototype, "deleted", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=linkedPeopleResourceNames" }),
        __metadata("design:type", Array)
    ], PersonMetadata.prototype, "linkedPeopleResourceNames", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=objectType" }),
        __metadata("design:type", String)
    ], PersonMetadata.prototype, "objectType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previousResourceNames" }),
        __metadata("design:type", Array)
    ], PersonMetadata.prototype, "previousResourceNames", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sources", elemType: source_1.Source }),
        __metadata("design:type", Array)
    ], PersonMetadata.prototype, "sources", void 0);
    return PersonMetadata;
}(utils_1.SpeakeasyBase));
exports.PersonMetadata = PersonMetadata;
// PersonMetadataInput
/**
 * The metadata about a person.
**/
var PersonMetadataInput = /** @class */ (function (_super) {
    __extends(PersonMetadataInput, _super);
    function PersonMetadataInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sources", elemType: source_2.SourceInput }),
        __metadata("design:type", Array)
    ], PersonMetadataInput.prototype, "sources", void 0);
    return PersonMetadataInput;
}(utils_1.SpeakeasyBase));
exports.PersonMetadataInput = PersonMetadataInput;
