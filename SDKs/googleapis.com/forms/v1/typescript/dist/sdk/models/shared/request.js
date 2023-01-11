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
exports.RequestInput = void 0;
var utils_1 = require("../../../internal/utils");
var createitemrequest_1 = require("./createitemrequest");
var deleteitemrequest_1 = require("./deleteitemrequest");
var moveitemrequest_1 = require("./moveitemrequest");
var updateforminforequest_1 = require("./updateforminforequest");
var updateitemrequest_1 = require("./updateitemrequest");
var updatesettingsrequest_1 = require("./updatesettingsrequest");
// RequestInput
/**
 * The kinds of update requests that can be made.
**/
var RequestInput = /** @class */ (function (_super) {
    __extends(RequestInput, _super);
    function RequestInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createItem" }),
        __metadata("design:type", createitemrequest_1.CreateItemRequestInput)
    ], RequestInput.prototype, "createItem", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deleteItem" }),
        __metadata("design:type", deleteitemrequest_1.DeleteItemRequest)
    ], RequestInput.prototype, "deleteItem", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=moveItem" }),
        __metadata("design:type", moveitemrequest_1.MoveItemRequest)
    ], RequestInput.prototype, "moveItem", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updateFormInfo" }),
        __metadata("design:type", updateforminforequest_1.UpdateFormInfoRequestInput)
    ], RequestInput.prototype, "updateFormInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updateItem" }),
        __metadata("design:type", updateitemrequest_1.UpdateItemRequestInput)
    ], RequestInput.prototype, "updateItem", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updateSettings" }),
        __metadata("design:type", updatesettingsrequest_1.UpdateSettingsRequest)
    ], RequestInput.prototype, "updateSettings", void 0);
    return RequestInput;
}(utils_1.SpeakeasyBase));
exports.RequestInput = RequestInput;
