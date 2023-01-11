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
exports.NodesCommentCreateResponse = exports.NodesCommentCreateRequest = exports.NodesCommentCreateCommentInput = exports.NodesCommentCreateCommentAttributesInput = exports.NodesCommentCreatePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var NodesCommentCreatePathParams = /** @class */ (function (_super) {
    __extends(NodesCommentCreatePathParams, _super);
    function NodesCommentCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=node_id" }),
        __metadata("design:type", String)
    ], NodesCommentCreatePathParams.prototype, "nodeId", void 0);
    return NodesCommentCreatePathParams;
}(utils_1.SpeakeasyBase));
exports.NodesCommentCreatePathParams = NodesCommentCreatePathParams;
// NodesCommentCreateCommentAttributesInput
/**
 * The properties of the comment entity.
**/
var NodesCommentCreateCommentAttributesInput = /** @class */ (function (_super) {
    __extends(NodesCommentCreateCommentAttributesInput, _super);
    function NodesCommentCreateCommentAttributesInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=content" }),
        __metadata("design:type", String)
    ], NodesCommentCreateCommentAttributesInput.prototype, "content", void 0);
    return NodesCommentCreateCommentAttributesInput;
}(utils_1.SpeakeasyBase));
exports.NodesCommentCreateCommentAttributesInput = NodesCommentCreateCommentAttributesInput;
var NodesCommentCreateCommentInput = /** @class */ (function (_super) {
    __extends(NodesCommentCreateCommentInput, _super);
    function NodesCommentCreateCommentInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=attributes" }),
        __metadata("design:type", NodesCommentCreateCommentAttributesInput)
    ], NodesCommentCreateCommentInput.prototype, "attributes", void 0);
    return NodesCommentCreateCommentInput;
}(utils_1.SpeakeasyBase));
exports.NodesCommentCreateCommentInput = NodesCommentCreateCommentInput;
var NodesCommentCreateRequest = /** @class */ (function (_super) {
    __extends(NodesCommentCreateRequest, _super);
    function NodesCommentCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", NodesCommentCreatePathParams)
    ], NodesCommentCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", NodesCommentCreateCommentInput)
    ], NodesCommentCreateRequest.prototype, "request", void 0);
    return NodesCommentCreateRequest;
}(utils_1.SpeakeasyBase));
exports.NodesCommentCreateRequest = NodesCommentCreateRequest;
var NodesCommentCreateResponse = /** @class */ (function (_super) {
    __extends(NodesCommentCreateResponse, _super);
    function NodesCommentCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], NodesCommentCreateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], NodesCommentCreateResponse.prototype, "statusCode", void 0);
    return NodesCommentCreateResponse;
}(utils_1.SpeakeasyBase));
exports.NodesCommentCreateResponse = NodesCommentCreateResponse;
