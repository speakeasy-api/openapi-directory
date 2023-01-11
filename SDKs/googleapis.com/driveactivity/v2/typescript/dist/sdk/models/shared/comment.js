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
exports.Comment = void 0;
var utils_1 = require("../../../internal/utils");
var assignment_1 = require("./assignment");
var user_1 = require("./user");
var post_1 = require("./post");
var suggestion_1 = require("./suggestion");
// Comment
/**
 * A change about comments on an object.
**/
var Comment = /** @class */ (function (_super) {
    __extends(Comment, _super);
    function Comment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=assignment" }),
        __metadata("design:type", assignment_1.Assignment)
    ], Comment.prototype, "assignment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mentionedUsers", elemType: user_1.User }),
        __metadata("design:type", Array)
    ], Comment.prototype, "mentionedUsers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=post" }),
        __metadata("design:type", post_1.Post)
    ], Comment.prototype, "post", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=suggestion" }),
        __metadata("design:type", suggestion_1.Suggestion)
    ], Comment.prototype, "suggestion", void 0);
    return Comment;
}(utils_1.SpeakeasyBase));
exports.Comment = Comment;
