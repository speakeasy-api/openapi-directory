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
exports.GetUserContentRecentJsonResponse = exports.GetUserContentRecentJsonRequest = exports.GetUserContentRecentJson200ApplicationJson = exports.GetUserContentRecentJson200ApplicationJsonResults = exports.GetUserContentRecentJson200ApplicationJsonResultsComments = exports.GetUserContentRecentJson200ApplicationJsonResultsCommentsAsset = exports.GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetProperties = exports.GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetPropertiesReachedMaxComOff = exports.GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetPropertiesCommentListSortEditors = exports.GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetPropertiesAutomoderationOn = exports.GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetAllProperties = exports.GetUserContentRecentJson200ApplicationJsonDebug = exports.GetUserContentRecentJsonSecurity = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetUserContentRecentJsonSecurity = /** @class */ (function (_super) {
    __extends(GetUserContentRecentJsonSecurity, _super);
    function GetUserContentRecentJsonSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetUserContentRecentJsonSecurity.prototype, "apiKey", void 0);
    return GetUserContentRecentJsonSecurity;
}(utils_1.SpeakeasyBase));
exports.GetUserContentRecentJsonSecurity = GetUserContentRecentJsonSecurity;
var GetUserContentRecentJson200ApplicationJsonDebug = /** @class */ (function (_super) {
    __extends(GetUserContentRecentJson200ApplicationJsonDebug, _super);
    function GetUserContentRecentJson200ApplicationJsonDebug() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=version" }),
        __metadata("design:type", Number)
    ], GetUserContentRecentJson200ApplicationJsonDebug.prototype, "version", void 0);
    return GetUserContentRecentJson200ApplicationJsonDebug;
}(utils_1.SpeakeasyBase));
exports.GetUserContentRecentJson200ApplicationJsonDebug = GetUserContentRecentJson200ApplicationJsonDebug;
var GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetAllProperties = /** @class */ (function (_super) {
    __extends(GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetAllProperties, _super);
    function GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetAllProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetAllProperties.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetAllProperties.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=properties" }),
        __metadata("design:type", Array)
    ], GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetAllProperties.prototype, "properties", void 0);
    return GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetAllProperties;
}(utils_1.SpeakeasyBase));
exports.GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetAllProperties = GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetAllProperties;
var GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetPropertiesAutomoderationOn = /** @class */ (function (_super) {
    __extends(GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetPropertiesAutomoderationOn, _super);
    function GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetPropertiesAutomoderationOn() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=groupID" }),
        __metadata("design:type", Number)
    ], GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetPropertiesAutomoderationOn.prototype, "groupID", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=taxonomyID" }),
        __metadata("design:type", Number)
    ], GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetPropertiesAutomoderationOn.prototype, "taxonomyID", void 0);
    return GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetPropertiesAutomoderationOn;
}(utils_1.SpeakeasyBase));
exports.GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetPropertiesAutomoderationOn = GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetPropertiesAutomoderationOn;
var GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetPropertiesCommentListSortEditors = /** @class */ (function (_super) {
    __extends(GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetPropertiesCommentListSortEditors, _super);
    function GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetPropertiesCommentListSortEditors() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=groupID" }),
        __metadata("design:type", Number)
    ], GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetPropertiesCommentListSortEditors.prototype, "groupID", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=taxonomyID" }),
        __metadata("design:type", Number)
    ], GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetPropertiesCommentListSortEditors.prototype, "taxonomyID", void 0);
    return GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetPropertiesCommentListSortEditors;
}(utils_1.SpeakeasyBase));
exports.GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetPropertiesCommentListSortEditors = GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetPropertiesCommentListSortEditors;
var GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetPropertiesReachedMaxComOff = /** @class */ (function (_super) {
    __extends(GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetPropertiesReachedMaxComOff, _super);
    function GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetPropertiesReachedMaxComOff() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=groupID" }),
        __metadata("design:type", Number)
    ], GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetPropertiesReachedMaxComOff.prototype, "groupID", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=taxonomyID" }),
        __metadata("design:type", Number)
    ], GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetPropertiesReachedMaxComOff.prototype, "taxonomyID", void 0);
    return GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetPropertiesReachedMaxComOff;
}(utils_1.SpeakeasyBase));
exports.GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetPropertiesReachedMaxComOff = GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetPropertiesReachedMaxComOff;
var GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetProperties = /** @class */ (function (_super) {
    __extends(GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetProperties, _super);
    function GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=automoderation-on" }),
        __metadata("design:type", GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetPropertiesAutomoderationOn)
    ], GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetProperties.prototype, "automoderationOn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=comment-list-sort-editors" }),
        __metadata("design:type", GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetPropertiesCommentListSortEditors)
    ], GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetProperties.prototype, "commentListSortEditors", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=reached-max-com-off" }),
        __metadata("design:type", GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetPropertiesReachedMaxComOff)
    ], GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetProperties.prototype, "reachedMaxComOff", void 0);
    return GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetProperties;
}(utils_1.SpeakeasyBase));
exports.GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetProperties = GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetProperties;
var GetUserContentRecentJson200ApplicationJsonResultsCommentsAsset = /** @class */ (function (_super) {
    __extends(GetUserContentRecentJson200ApplicationJsonResultsCommentsAsset, _super);
    function GetUserContentRecentJson200ApplicationJsonResultsCommentsAsset() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=all-properties", elemType: GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetAllProperties }),
        __metadata("design:type", Array)
    ], GetUserContentRecentJson200ApplicationJsonResultsCommentsAsset.prototype, "allProperties", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=assetID" }),
        __metadata("design:type", Number)
    ], GetUserContentRecentJson200ApplicationJsonResultsCommentsAsset.prototype, "assetID", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=assetTitle" }),
        __metadata("design:type", String)
    ], GetUserContentRecentJson200ApplicationJsonResultsCommentsAsset.prototype, "assetTitle", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=assetURL" }),
        __metadata("design:type", String)
    ], GetUserContentRecentJson200ApplicationJsonResultsCommentsAsset.prototype, "assetURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createDate" }),
        __metadata("design:type", String)
    ], GetUserContentRecentJson200ApplicationJsonResultsCommentsAsset.prototype, "createDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=labels" }),
        __metadata("design:type", Array)
    ], GetUserContentRecentJson200ApplicationJsonResultsCommentsAsset.prototype, "labels", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=properties" }),
        __metadata("design:type", GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetProperties)
    ], GetUserContentRecentJson200ApplicationJsonResultsCommentsAsset.prototype, "properties", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=source" }),
        __metadata("design:type", String)
    ], GetUserContentRecentJson200ApplicationJsonResultsCommentsAsset.prototype, "source", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=taxonomy" }),
        __metadata("design:type", String)
    ], GetUserContentRecentJson200ApplicationJsonResultsCommentsAsset.prototype, "taxonomy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=text" }),
        __metadata("design:type", Array)
    ], GetUserContentRecentJson200ApplicationJsonResultsCommentsAsset.prototype, "text", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updateDate" }),
        __metadata("design:type", String)
    ], GetUserContentRecentJson200ApplicationJsonResultsCommentsAsset.prototype, "updateDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=vendorID" }),
        __metadata("design:type", String)
    ], GetUserContentRecentJson200ApplicationJsonResultsCommentsAsset.prototype, "vendorID", void 0);
    return GetUserContentRecentJson200ApplicationJsonResultsCommentsAsset;
}(utils_1.SpeakeasyBase));
exports.GetUserContentRecentJson200ApplicationJsonResultsCommentsAsset = GetUserContentRecentJson200ApplicationJsonResultsCommentsAsset;
var GetUserContentRecentJson200ApplicationJsonResultsComments = /** @class */ (function (_super) {
    __extends(GetUserContentRecentJson200ApplicationJsonResultsComments, _super);
    function GetUserContentRecentJson200ApplicationJsonResultsComments() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=approveDate" }),
        __metadata("design:type", String)
    ], GetUserContentRecentJson200ApplicationJsonResultsComments.prototype, "approveDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=asset" }),
        __metadata("design:type", GetUserContentRecentJson200ApplicationJsonResultsCommentsAsset)
    ], GetUserContentRecentJson200ApplicationJsonResultsComments.prototype, "asset", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=assetID" }),
        __metadata("design:type", Number)
    ], GetUserContentRecentJson200ApplicationJsonResultsComments.prototype, "assetID", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=commentBody" }),
        __metadata("design:type", String)
    ], GetUserContentRecentJson200ApplicationJsonResultsComments.prototype, "commentBody", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=commentID" }),
        __metadata("design:type", Number)
    ], GetUserContentRecentJson200ApplicationJsonResultsComments.prototype, "commentID", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=commentSequence" }),
        __metadata("design:type", Number)
    ], GetUserContentRecentJson200ApplicationJsonResultsComments.prototype, "commentSequence", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=commentTitle" }),
        __metadata("design:type", String)
    ], GetUserContentRecentJson200ApplicationJsonResultsComments.prototype, "commentTitle", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=commentType" }),
        __metadata("design:type", String)
    ], GetUserContentRecentJson200ApplicationJsonResultsComments.prototype, "commentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createDate" }),
        __metadata("design:type", String)
    ], GetUserContentRecentJson200ApplicationJsonResultsComments.prototype, "createDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=display_name" }),
        __metadata("design:type", String)
    ], GetUserContentRecentJson200ApplicationJsonResultsComments.prototype, "displayName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=editorsSelection" }),
        __metadata("design:type", Number)
    ], GetUserContentRecentJson200ApplicationJsonResultsComments.prototype, "editorsSelection", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], GetUserContentRecentJson200ApplicationJsonResultsComments.prototype, "location", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=parentID" }),
        __metadata("design:type", Object)
    ], GetUserContentRecentJson200ApplicationJsonResultsComments.prototype, "parentID", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recommendationCount" }),
        __metadata("design:type", Number)
    ], GetUserContentRecentJson200ApplicationJsonResultsComments.prototype, "recommendationCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=replies" }),
        __metadata("design:type", Array)
    ], GetUserContentRecentJson200ApplicationJsonResultsComments.prototype, "replies", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetUserContentRecentJson200ApplicationJsonResultsComments.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=statusID" }),
        __metadata("design:type", Number)
    ], GetUserContentRecentJson200ApplicationJsonResultsComments.prototype, "statusID", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updateDate" }),
        __metadata("design:type", String)
    ], GetUserContentRecentJson200ApplicationJsonResultsComments.prototype, "updateDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=userDisplayName" }),
        __metadata("design:type", String)
    ], GetUserContentRecentJson200ApplicationJsonResultsComments.prototype, "userDisplayName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=userID" }),
        __metadata("design:type", Number)
    ], GetUserContentRecentJson200ApplicationJsonResultsComments.prototype, "userID", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=userLocation" }),
        __metadata("design:type", String)
    ], GetUserContentRecentJson200ApplicationJsonResultsComments.prototype, "userLocation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=userTitle" }),
        __metadata("design:type", String)
    ], GetUserContentRecentJson200ApplicationJsonResultsComments.prototype, "userTitle", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=userURL" }),
        __metadata("design:type", String)
    ], GetUserContentRecentJson200ApplicationJsonResultsComments.prototype, "userURL", void 0);
    return GetUserContentRecentJson200ApplicationJsonResultsComments;
}(utils_1.SpeakeasyBase));
exports.GetUserContentRecentJson200ApplicationJsonResultsComments = GetUserContentRecentJson200ApplicationJsonResultsComments;
var GetUserContentRecentJson200ApplicationJsonResults = /** @class */ (function (_super) {
    __extends(GetUserContentRecentJson200ApplicationJsonResults, _super);
    function GetUserContentRecentJson200ApplicationJsonResults() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=api_timestamp" }),
        __metadata("design:type", String)
    ], GetUserContentRecentJson200ApplicationJsonResults.prototype, "apiTimestamp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=comments", elemType: GetUserContentRecentJson200ApplicationJsonResultsComments }),
        __metadata("design:type", Array)
    ], GetUserContentRecentJson200ApplicationJsonResults.prototype, "comments", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=totalCommentsReturned" }),
        __metadata("design:type", Number)
    ], GetUserContentRecentJson200ApplicationJsonResults.prototype, "totalCommentsReturned", void 0);
    return GetUserContentRecentJson200ApplicationJsonResults;
}(utils_1.SpeakeasyBase));
exports.GetUserContentRecentJson200ApplicationJsonResults = GetUserContentRecentJson200ApplicationJsonResults;
var GetUserContentRecentJson200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetUserContentRecentJson200ApplicationJson, _super);
    function GetUserContentRecentJson200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=copyright" }),
        __metadata("design:type", String)
    ], GetUserContentRecentJson200ApplicationJson.prototype, "copyright", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=debug" }),
        __metadata("design:type", GetUserContentRecentJson200ApplicationJsonDebug)
    ], GetUserContentRecentJson200ApplicationJson.prototype, "debug", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=results" }),
        __metadata("design:type", GetUserContentRecentJson200ApplicationJsonResults)
    ], GetUserContentRecentJson200ApplicationJson.prototype, "results", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetUserContentRecentJson200ApplicationJson.prototype, "status", void 0);
    return GetUserContentRecentJson200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetUserContentRecentJson200ApplicationJson = GetUserContentRecentJson200ApplicationJson;
var GetUserContentRecentJsonRequest = /** @class */ (function (_super) {
    __extends(GetUserContentRecentJsonRequest, _super);
    function GetUserContentRecentJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetUserContentRecentJsonSecurity)
    ], GetUserContentRecentJsonRequest.prototype, "security", void 0);
    return GetUserContentRecentJsonRequest;
}(utils_1.SpeakeasyBase));
exports.GetUserContentRecentJsonRequest = GetUserContentRecentJsonRequest;
var GetUserContentRecentJsonResponse = /** @class */ (function (_super) {
    __extends(GetUserContentRecentJsonResponse, _super);
    function GetUserContentRecentJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetUserContentRecentJsonResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetUserContentRecentJson200ApplicationJson)
    ], GetUserContentRecentJsonResponse.prototype, "getUserContentRecentJSON200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetUserContentRecentJsonResponse.prototype, "statusCode", void 0);
    return GetUserContentRecentJsonResponse;
}(utils_1.SpeakeasyBase));
exports.GetUserContentRecentJsonResponse = GetUserContentRecentJsonResponse;
