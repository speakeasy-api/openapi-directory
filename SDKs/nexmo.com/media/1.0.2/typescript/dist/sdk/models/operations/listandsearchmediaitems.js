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
exports.ListAndSearchMediaItemsResponse = exports.ListAndSearchMediaItemsRequest = exports.ListAndSearchMediaItems200ApplicationJson = exports.ListAndSearchMediaItems200ApplicationJsonLinks = exports.ListAndSearchMediaItems200ApplicationJsonLinksSelf = exports.ListAndSearchMediaItems200ApplicationJsonLinksLast = exports.ListAndSearchMediaItems200ApplicationJsonLinksFirst = exports.ListAndSearchMediaItems200ApplicationJsonEmbedded = exports.ListAndSearchMediaItemsQueryParams = exports.ListAndSearchMediaItemsOrderEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ListAndSearchMediaItemsOrderEnum;
(function (ListAndSearchMediaItemsOrderEnum) {
    ListAndSearchMediaItemsOrderEnum["Ascending"] = "ascending";
    ListAndSearchMediaItemsOrderEnum["Descending"] = "descending";
})(ListAndSearchMediaItemsOrderEnum = exports.ListAndSearchMediaItemsOrderEnum || (exports.ListAndSearchMediaItemsOrderEnum = {}));
var ListAndSearchMediaItemsQueryParams = /** @class */ (function (_super) {
    __extends(ListAndSearchMediaItemsQueryParams, _super);
    function ListAndSearchMediaItemsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=end_time" }),
        __metadata("design:type", String)
    ], ListAndSearchMediaItemsQueryParams.prototype, "endTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=order" }),
        __metadata("design:type", String)
    ], ListAndSearchMediaItemsQueryParams.prototype, "order", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_index" }),
        __metadata("design:type", Number)
    ], ListAndSearchMediaItemsQueryParams.prototype, "pageIndex", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], ListAndSearchMediaItemsQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=start_time" }),
        __metadata("design:type", String)
    ], ListAndSearchMediaItemsQueryParams.prototype, "startTime", void 0);
    return ListAndSearchMediaItemsQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListAndSearchMediaItemsQueryParams = ListAndSearchMediaItemsQueryParams;
// ListAndSearchMediaItems200ApplicationJsonEmbedded
/**
 * A collection of media items. See [retrieve a media item](#retrieve-a-media-item) for a description of the returned fields
**/
var ListAndSearchMediaItems200ApplicationJsonEmbedded = /** @class */ (function (_super) {
    __extends(ListAndSearchMediaItems200ApplicationJsonEmbedded, _super);
    function ListAndSearchMediaItems200ApplicationJsonEmbedded() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=media", elemType: shared.Media }),
        __metadata("design:type", Array)
    ], ListAndSearchMediaItems200ApplicationJsonEmbedded.prototype, "media", void 0);
    return ListAndSearchMediaItems200ApplicationJsonEmbedded;
}(utils_1.SpeakeasyBase));
exports.ListAndSearchMediaItems200ApplicationJsonEmbedded = ListAndSearchMediaItems200ApplicationJsonEmbedded;
var ListAndSearchMediaItems200ApplicationJsonLinksFirst = /** @class */ (function (_super) {
    __extends(ListAndSearchMediaItems200ApplicationJsonLinksFirst, _super);
    function ListAndSearchMediaItems200ApplicationJsonLinksFirst() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], ListAndSearchMediaItems200ApplicationJsonLinksFirst.prototype, "href", void 0);
    return ListAndSearchMediaItems200ApplicationJsonLinksFirst;
}(utils_1.SpeakeasyBase));
exports.ListAndSearchMediaItems200ApplicationJsonLinksFirst = ListAndSearchMediaItems200ApplicationJsonLinksFirst;
var ListAndSearchMediaItems200ApplicationJsonLinksLast = /** @class */ (function (_super) {
    __extends(ListAndSearchMediaItems200ApplicationJsonLinksLast, _super);
    function ListAndSearchMediaItems200ApplicationJsonLinksLast() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], ListAndSearchMediaItems200ApplicationJsonLinksLast.prototype, "href", void 0);
    return ListAndSearchMediaItems200ApplicationJsonLinksLast;
}(utils_1.SpeakeasyBase));
exports.ListAndSearchMediaItems200ApplicationJsonLinksLast = ListAndSearchMediaItems200ApplicationJsonLinksLast;
var ListAndSearchMediaItems200ApplicationJsonLinksSelf = /** @class */ (function (_super) {
    __extends(ListAndSearchMediaItems200ApplicationJsonLinksSelf, _super);
    function ListAndSearchMediaItems200ApplicationJsonLinksSelf() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], ListAndSearchMediaItems200ApplicationJsonLinksSelf.prototype, "href", void 0);
    return ListAndSearchMediaItems200ApplicationJsonLinksSelf;
}(utils_1.SpeakeasyBase));
exports.ListAndSearchMediaItems200ApplicationJsonLinksSelf = ListAndSearchMediaItems200ApplicationJsonLinksSelf;
var ListAndSearchMediaItems200ApplicationJsonLinks = /** @class */ (function (_super) {
    __extends(ListAndSearchMediaItems200ApplicationJsonLinks, _super);
    function ListAndSearchMediaItems200ApplicationJsonLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first" }),
        __metadata("design:type", ListAndSearchMediaItems200ApplicationJsonLinksFirst)
    ], ListAndSearchMediaItems200ApplicationJsonLinks.prototype, "first", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last" }),
        __metadata("design:type", ListAndSearchMediaItems200ApplicationJsonLinksLast)
    ], ListAndSearchMediaItems200ApplicationJsonLinks.prototype, "last", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=self" }),
        __metadata("design:type", ListAndSearchMediaItems200ApplicationJsonLinksSelf)
    ], ListAndSearchMediaItems200ApplicationJsonLinks.prototype, "self", void 0);
    return ListAndSearchMediaItems200ApplicationJsonLinks;
}(utils_1.SpeakeasyBase));
exports.ListAndSearchMediaItems200ApplicationJsonLinks = ListAndSearchMediaItems200ApplicationJsonLinks;
var ListAndSearchMediaItems200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListAndSearchMediaItems200ApplicationJson, _super);
    function ListAndSearchMediaItems200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=_embedded" }),
        __metadata("design:type", ListAndSearchMediaItems200ApplicationJsonEmbedded)
    ], ListAndSearchMediaItems200ApplicationJson.prototype, "embedded", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=_links" }),
        __metadata("design:type", ListAndSearchMediaItems200ApplicationJsonLinks)
    ], ListAndSearchMediaItems200ApplicationJson.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], ListAndSearchMediaItems200ApplicationJson.prototype, "count", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_index" }),
        __metadata("design:type", Number)
    ], ListAndSearchMediaItems200ApplicationJson.prototype, "pageIndex", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListAndSearchMediaItems200ApplicationJson.prototype, "pageSize", void 0);
    return ListAndSearchMediaItems200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListAndSearchMediaItems200ApplicationJson = ListAndSearchMediaItems200ApplicationJson;
var ListAndSearchMediaItemsRequest = /** @class */ (function (_super) {
    __extends(ListAndSearchMediaItemsRequest, _super);
    function ListAndSearchMediaItemsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListAndSearchMediaItemsQueryParams)
    ], ListAndSearchMediaItemsRequest.prototype, "queryParams", void 0);
    return ListAndSearchMediaItemsRequest;
}(utils_1.SpeakeasyBase));
exports.ListAndSearchMediaItemsRequest = ListAndSearchMediaItemsRequest;
var ListAndSearchMediaItemsResponse = /** @class */ (function (_super) {
    __extends(ListAndSearchMediaItemsResponse, _super);
    function ListAndSearchMediaItemsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListAndSearchMediaItemsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListAndSearchMediaItemsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListAndSearchMediaItems200ApplicationJson)
    ], ListAndSearchMediaItemsResponse.prototype, "listAndSearchMediaItems200ApplicationJSONObject", void 0);
    return ListAndSearchMediaItemsResponse;
}(utils_1.SpeakeasyBase));
exports.ListAndSearchMediaItemsResponse = ListAndSearchMediaItemsResponse;
