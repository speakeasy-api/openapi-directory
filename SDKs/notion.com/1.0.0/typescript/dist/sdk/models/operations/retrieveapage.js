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
exports.RetrieveAPageResponse = exports.RetrieveAPageRequest = exports.RetrieveAPage200ApplicationJson = exports.RetrieveAPage200ApplicationJsonProperties = exports.RetrieveAPage200ApplicationJsonPropertiesType = exports.RetrieveAPage200ApplicationJsonPropertiesTypeSelect = exports.RetrieveAPage200ApplicationJsonPropertiesSummary = exports.RetrieveAPage200ApplicationJsonPropertiesSummaryText = exports.RetrieveAPage200ApplicationJsonPropertiesSummaryTextText = exports.RetrieveAPage200ApplicationJsonPropertiesSummaryTextAnnotations = exports.RetrieveAPage200ApplicationJsonPropertiesStatus = exports.RetrieveAPage200ApplicationJsonPropertiesStatusSelect = exports.RetrieveAPage200ApplicationJsonPropertiesRead = exports.RetrieveAPage200ApplicationJsonPropertiesPublishingReleaseDate = exports.RetrieveAPage200ApplicationJsonPropertiesPublishingReleaseDateDate = exports.RetrieveAPage200ApplicationJsonPropertiesPublisher = exports.RetrieveAPage200ApplicationJsonPropertiesPublisherSelect = exports.RetrieveAPage200ApplicationJsonPropertiesName = exports.RetrieveAPage200ApplicationJsonPropertiesNameTitle = exports.RetrieveAPage200ApplicationJsonPropertiesNameTitleText = exports.RetrieveAPage200ApplicationJsonPropertiesNameTitleAnnotations = exports.RetrieveAPage200ApplicationJsonPropertiesLink = exports.RetrieveAPage200ApplicationJsonPropertiesAuthor = exports.RetrieveAPage200ApplicationJsonPropertiesAuthorMultiSelect = exports.RetrieveAPage200ApplicationJsonParent = exports.RetrieveAPagePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var RetrieveAPagePathParams = /** @class */ (function (_super) {
    __extends(RetrieveAPagePathParams, _super);
    function RetrieveAPagePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], RetrieveAPagePathParams.prototype, "id", void 0);
    return RetrieveAPagePathParams;
}(utils_1.SpeakeasyBase));
exports.RetrieveAPagePathParams = RetrieveAPagePathParams;
var RetrieveAPage200ApplicationJsonParent = /** @class */ (function (_super) {
    __extends(RetrieveAPage200ApplicationJsonParent, _super);
    function RetrieveAPage200ApplicationJsonParent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=database_id" }),
        __metadata("design:type", String)
    ], RetrieveAPage200ApplicationJsonParent.prototype, "databaseId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], RetrieveAPage200ApplicationJsonParent.prototype, "type", void 0);
    return RetrieveAPage200ApplicationJsonParent;
}(utils_1.SpeakeasyBase));
exports.RetrieveAPage200ApplicationJsonParent = RetrieveAPage200ApplicationJsonParent;
var RetrieveAPage200ApplicationJsonPropertiesAuthorMultiSelect = /** @class */ (function (_super) {
    __extends(RetrieveAPage200ApplicationJsonPropertiesAuthorMultiSelect, _super);
    function RetrieveAPage200ApplicationJsonPropertiesAuthorMultiSelect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=color" }),
        __metadata("design:type", String)
    ], RetrieveAPage200ApplicationJsonPropertiesAuthorMultiSelect.prototype, "color", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], RetrieveAPage200ApplicationJsonPropertiesAuthorMultiSelect.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], RetrieveAPage200ApplicationJsonPropertiesAuthorMultiSelect.prototype, "name", void 0);
    return RetrieveAPage200ApplicationJsonPropertiesAuthorMultiSelect;
}(utils_1.SpeakeasyBase));
exports.RetrieveAPage200ApplicationJsonPropertiesAuthorMultiSelect = RetrieveAPage200ApplicationJsonPropertiesAuthorMultiSelect;
var RetrieveAPage200ApplicationJsonPropertiesAuthor = /** @class */ (function (_super) {
    __extends(RetrieveAPage200ApplicationJsonPropertiesAuthor, _super);
    function RetrieveAPage200ApplicationJsonPropertiesAuthor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], RetrieveAPage200ApplicationJsonPropertiesAuthor.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=multi_select", elemType: RetrieveAPage200ApplicationJsonPropertiesAuthorMultiSelect }),
        __metadata("design:type", Array)
    ], RetrieveAPage200ApplicationJsonPropertiesAuthor.prototype, "multiSelect", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], RetrieveAPage200ApplicationJsonPropertiesAuthor.prototype, "type", void 0);
    return RetrieveAPage200ApplicationJsonPropertiesAuthor;
}(utils_1.SpeakeasyBase));
exports.RetrieveAPage200ApplicationJsonPropertiesAuthor = RetrieveAPage200ApplicationJsonPropertiesAuthor;
var RetrieveAPage200ApplicationJsonPropertiesLink = /** @class */ (function (_super) {
    __extends(RetrieveAPage200ApplicationJsonPropertiesLink, _super);
    function RetrieveAPage200ApplicationJsonPropertiesLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], RetrieveAPage200ApplicationJsonPropertiesLink.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], RetrieveAPage200ApplicationJsonPropertiesLink.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], RetrieveAPage200ApplicationJsonPropertiesLink.prototype, "url", void 0);
    return RetrieveAPage200ApplicationJsonPropertiesLink;
}(utils_1.SpeakeasyBase));
exports.RetrieveAPage200ApplicationJsonPropertiesLink = RetrieveAPage200ApplicationJsonPropertiesLink;
var RetrieveAPage200ApplicationJsonPropertiesNameTitleAnnotations = /** @class */ (function (_super) {
    __extends(RetrieveAPage200ApplicationJsonPropertiesNameTitleAnnotations, _super);
    function RetrieveAPage200ApplicationJsonPropertiesNameTitleAnnotations() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bold" }),
        __metadata("design:type", Boolean)
    ], RetrieveAPage200ApplicationJsonPropertiesNameTitleAnnotations.prototype, "bold", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Boolean)
    ], RetrieveAPage200ApplicationJsonPropertiesNameTitleAnnotations.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=color" }),
        __metadata("design:type", String)
    ], RetrieveAPage200ApplicationJsonPropertiesNameTitleAnnotations.prototype, "color", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=italic" }),
        __metadata("design:type", Boolean)
    ], RetrieveAPage200ApplicationJsonPropertiesNameTitleAnnotations.prototype, "italic", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=strikethrough" }),
        __metadata("design:type", Boolean)
    ], RetrieveAPage200ApplicationJsonPropertiesNameTitleAnnotations.prototype, "strikethrough", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=underline" }),
        __metadata("design:type", Boolean)
    ], RetrieveAPage200ApplicationJsonPropertiesNameTitleAnnotations.prototype, "underline", void 0);
    return RetrieveAPage200ApplicationJsonPropertiesNameTitleAnnotations;
}(utils_1.SpeakeasyBase));
exports.RetrieveAPage200ApplicationJsonPropertiesNameTitleAnnotations = RetrieveAPage200ApplicationJsonPropertiesNameTitleAnnotations;
var RetrieveAPage200ApplicationJsonPropertiesNameTitleText = /** @class */ (function (_super) {
    __extends(RetrieveAPage200ApplicationJsonPropertiesNameTitleText, _super);
    function RetrieveAPage200ApplicationJsonPropertiesNameTitleText() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=content" }),
        __metadata("design:type", String)
    ], RetrieveAPage200ApplicationJsonPropertiesNameTitleText.prototype, "content", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=link" }),
        __metadata("design:type", Object)
    ], RetrieveAPage200ApplicationJsonPropertiesNameTitleText.prototype, "link", void 0);
    return RetrieveAPage200ApplicationJsonPropertiesNameTitleText;
}(utils_1.SpeakeasyBase));
exports.RetrieveAPage200ApplicationJsonPropertiesNameTitleText = RetrieveAPage200ApplicationJsonPropertiesNameTitleText;
var RetrieveAPage200ApplicationJsonPropertiesNameTitle = /** @class */ (function (_super) {
    __extends(RetrieveAPage200ApplicationJsonPropertiesNameTitle, _super);
    function RetrieveAPage200ApplicationJsonPropertiesNameTitle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=annotations" }),
        __metadata("design:type", RetrieveAPage200ApplicationJsonPropertiesNameTitleAnnotations)
    ], RetrieveAPage200ApplicationJsonPropertiesNameTitle.prototype, "annotations", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=href" }),
        __metadata("design:type", Object)
    ], RetrieveAPage200ApplicationJsonPropertiesNameTitle.prototype, "href", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=plain_text" }),
        __metadata("design:type", String)
    ], RetrieveAPage200ApplicationJsonPropertiesNameTitle.prototype, "plainText", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=text" }),
        __metadata("design:type", RetrieveAPage200ApplicationJsonPropertiesNameTitleText)
    ], RetrieveAPage200ApplicationJsonPropertiesNameTitle.prototype, "text", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], RetrieveAPage200ApplicationJsonPropertiesNameTitle.prototype, "type", void 0);
    return RetrieveAPage200ApplicationJsonPropertiesNameTitle;
}(utils_1.SpeakeasyBase));
exports.RetrieveAPage200ApplicationJsonPropertiesNameTitle = RetrieveAPage200ApplicationJsonPropertiesNameTitle;
var RetrieveAPage200ApplicationJsonPropertiesName = /** @class */ (function (_super) {
    __extends(RetrieveAPage200ApplicationJsonPropertiesName, _super);
    function RetrieveAPage200ApplicationJsonPropertiesName() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], RetrieveAPage200ApplicationJsonPropertiesName.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title", elemType: RetrieveAPage200ApplicationJsonPropertiesNameTitle }),
        __metadata("design:type", Array)
    ], RetrieveAPage200ApplicationJsonPropertiesName.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], RetrieveAPage200ApplicationJsonPropertiesName.prototype, "type", void 0);
    return RetrieveAPage200ApplicationJsonPropertiesName;
}(utils_1.SpeakeasyBase));
exports.RetrieveAPage200ApplicationJsonPropertiesName = RetrieveAPage200ApplicationJsonPropertiesName;
var RetrieveAPage200ApplicationJsonPropertiesPublisherSelect = /** @class */ (function (_super) {
    __extends(RetrieveAPage200ApplicationJsonPropertiesPublisherSelect, _super);
    function RetrieveAPage200ApplicationJsonPropertiesPublisherSelect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=color" }),
        __metadata("design:type", String)
    ], RetrieveAPage200ApplicationJsonPropertiesPublisherSelect.prototype, "color", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], RetrieveAPage200ApplicationJsonPropertiesPublisherSelect.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], RetrieveAPage200ApplicationJsonPropertiesPublisherSelect.prototype, "name", void 0);
    return RetrieveAPage200ApplicationJsonPropertiesPublisherSelect;
}(utils_1.SpeakeasyBase));
exports.RetrieveAPage200ApplicationJsonPropertiesPublisherSelect = RetrieveAPage200ApplicationJsonPropertiesPublisherSelect;
var RetrieveAPage200ApplicationJsonPropertiesPublisher = /** @class */ (function (_super) {
    __extends(RetrieveAPage200ApplicationJsonPropertiesPublisher, _super);
    function RetrieveAPage200ApplicationJsonPropertiesPublisher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], RetrieveAPage200ApplicationJsonPropertiesPublisher.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=select" }),
        __metadata("design:type", RetrieveAPage200ApplicationJsonPropertiesPublisherSelect)
    ], RetrieveAPage200ApplicationJsonPropertiesPublisher.prototype, "select", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], RetrieveAPage200ApplicationJsonPropertiesPublisher.prototype, "type", void 0);
    return RetrieveAPage200ApplicationJsonPropertiesPublisher;
}(utils_1.SpeakeasyBase));
exports.RetrieveAPage200ApplicationJsonPropertiesPublisher = RetrieveAPage200ApplicationJsonPropertiesPublisher;
var RetrieveAPage200ApplicationJsonPropertiesPublishingReleaseDateDate = /** @class */ (function (_super) {
    __extends(RetrieveAPage200ApplicationJsonPropertiesPublishingReleaseDateDate, _super);
    function RetrieveAPage200ApplicationJsonPropertiesPublishingReleaseDateDate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=end" }),
        __metadata("design:type", Object)
    ], RetrieveAPage200ApplicationJsonPropertiesPublishingReleaseDateDate.prototype, "end", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=start" }),
        __metadata("design:type", String)
    ], RetrieveAPage200ApplicationJsonPropertiesPublishingReleaseDateDate.prototype, "start", void 0);
    return RetrieveAPage200ApplicationJsonPropertiesPublishingReleaseDateDate;
}(utils_1.SpeakeasyBase));
exports.RetrieveAPage200ApplicationJsonPropertiesPublishingReleaseDateDate = RetrieveAPage200ApplicationJsonPropertiesPublishingReleaseDateDate;
var RetrieveAPage200ApplicationJsonPropertiesPublishingReleaseDate = /** @class */ (function (_super) {
    __extends(RetrieveAPage200ApplicationJsonPropertiesPublishingReleaseDate, _super);
    function RetrieveAPage200ApplicationJsonPropertiesPublishingReleaseDate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=date" }),
        __metadata("design:type", RetrieveAPage200ApplicationJsonPropertiesPublishingReleaseDateDate)
    ], RetrieveAPage200ApplicationJsonPropertiesPublishingReleaseDate.prototype, "date", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], RetrieveAPage200ApplicationJsonPropertiesPublishingReleaseDate.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], RetrieveAPage200ApplicationJsonPropertiesPublishingReleaseDate.prototype, "type", void 0);
    return RetrieveAPage200ApplicationJsonPropertiesPublishingReleaseDate;
}(utils_1.SpeakeasyBase));
exports.RetrieveAPage200ApplicationJsonPropertiesPublishingReleaseDate = RetrieveAPage200ApplicationJsonPropertiesPublishingReleaseDate;
var RetrieveAPage200ApplicationJsonPropertiesRead = /** @class */ (function (_super) {
    __extends(RetrieveAPage200ApplicationJsonPropertiesRead, _super);
    function RetrieveAPage200ApplicationJsonPropertiesRead() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=checkbox" }),
        __metadata("design:type", Boolean)
    ], RetrieveAPage200ApplicationJsonPropertiesRead.prototype, "checkbox", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], RetrieveAPage200ApplicationJsonPropertiesRead.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], RetrieveAPage200ApplicationJsonPropertiesRead.prototype, "type", void 0);
    return RetrieveAPage200ApplicationJsonPropertiesRead;
}(utils_1.SpeakeasyBase));
exports.RetrieveAPage200ApplicationJsonPropertiesRead = RetrieveAPage200ApplicationJsonPropertiesRead;
var RetrieveAPage200ApplicationJsonPropertiesStatusSelect = /** @class */ (function (_super) {
    __extends(RetrieveAPage200ApplicationJsonPropertiesStatusSelect, _super);
    function RetrieveAPage200ApplicationJsonPropertiesStatusSelect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=color" }),
        __metadata("design:type", String)
    ], RetrieveAPage200ApplicationJsonPropertiesStatusSelect.prototype, "color", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], RetrieveAPage200ApplicationJsonPropertiesStatusSelect.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], RetrieveAPage200ApplicationJsonPropertiesStatusSelect.prototype, "name", void 0);
    return RetrieveAPage200ApplicationJsonPropertiesStatusSelect;
}(utils_1.SpeakeasyBase));
exports.RetrieveAPage200ApplicationJsonPropertiesStatusSelect = RetrieveAPage200ApplicationJsonPropertiesStatusSelect;
var RetrieveAPage200ApplicationJsonPropertiesStatus = /** @class */ (function (_super) {
    __extends(RetrieveAPage200ApplicationJsonPropertiesStatus, _super);
    function RetrieveAPage200ApplicationJsonPropertiesStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], RetrieveAPage200ApplicationJsonPropertiesStatus.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=select" }),
        __metadata("design:type", RetrieveAPage200ApplicationJsonPropertiesStatusSelect)
    ], RetrieveAPage200ApplicationJsonPropertiesStatus.prototype, "select", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], RetrieveAPage200ApplicationJsonPropertiesStatus.prototype, "type", void 0);
    return RetrieveAPage200ApplicationJsonPropertiesStatus;
}(utils_1.SpeakeasyBase));
exports.RetrieveAPage200ApplicationJsonPropertiesStatus = RetrieveAPage200ApplicationJsonPropertiesStatus;
var RetrieveAPage200ApplicationJsonPropertiesSummaryTextAnnotations = /** @class */ (function (_super) {
    __extends(RetrieveAPage200ApplicationJsonPropertiesSummaryTextAnnotations, _super);
    function RetrieveAPage200ApplicationJsonPropertiesSummaryTextAnnotations() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bold" }),
        __metadata("design:type", Boolean)
    ], RetrieveAPage200ApplicationJsonPropertiesSummaryTextAnnotations.prototype, "bold", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Boolean)
    ], RetrieveAPage200ApplicationJsonPropertiesSummaryTextAnnotations.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=color" }),
        __metadata("design:type", String)
    ], RetrieveAPage200ApplicationJsonPropertiesSummaryTextAnnotations.prototype, "color", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=italic" }),
        __metadata("design:type", Boolean)
    ], RetrieveAPage200ApplicationJsonPropertiesSummaryTextAnnotations.prototype, "italic", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=strikethrough" }),
        __metadata("design:type", Boolean)
    ], RetrieveAPage200ApplicationJsonPropertiesSummaryTextAnnotations.prototype, "strikethrough", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=underline" }),
        __metadata("design:type", Boolean)
    ], RetrieveAPage200ApplicationJsonPropertiesSummaryTextAnnotations.prototype, "underline", void 0);
    return RetrieveAPage200ApplicationJsonPropertiesSummaryTextAnnotations;
}(utils_1.SpeakeasyBase));
exports.RetrieveAPage200ApplicationJsonPropertiesSummaryTextAnnotations = RetrieveAPage200ApplicationJsonPropertiesSummaryTextAnnotations;
var RetrieveAPage200ApplicationJsonPropertiesSummaryTextText = /** @class */ (function (_super) {
    __extends(RetrieveAPage200ApplicationJsonPropertiesSummaryTextText, _super);
    function RetrieveAPage200ApplicationJsonPropertiesSummaryTextText() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=content" }),
        __metadata("design:type", String)
    ], RetrieveAPage200ApplicationJsonPropertiesSummaryTextText.prototype, "content", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=link" }),
        __metadata("design:type", Object)
    ], RetrieveAPage200ApplicationJsonPropertiesSummaryTextText.prototype, "link", void 0);
    return RetrieveAPage200ApplicationJsonPropertiesSummaryTextText;
}(utils_1.SpeakeasyBase));
exports.RetrieveAPage200ApplicationJsonPropertiesSummaryTextText = RetrieveAPage200ApplicationJsonPropertiesSummaryTextText;
var RetrieveAPage200ApplicationJsonPropertiesSummaryText = /** @class */ (function (_super) {
    __extends(RetrieveAPage200ApplicationJsonPropertiesSummaryText, _super);
    function RetrieveAPage200ApplicationJsonPropertiesSummaryText() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=annotations" }),
        __metadata("design:type", RetrieveAPage200ApplicationJsonPropertiesSummaryTextAnnotations)
    ], RetrieveAPage200ApplicationJsonPropertiesSummaryText.prototype, "annotations", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=href" }),
        __metadata("design:type", Object)
    ], RetrieveAPage200ApplicationJsonPropertiesSummaryText.prototype, "href", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=plain_text" }),
        __metadata("design:type", String)
    ], RetrieveAPage200ApplicationJsonPropertiesSummaryText.prototype, "plainText", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=text" }),
        __metadata("design:type", RetrieveAPage200ApplicationJsonPropertiesSummaryTextText)
    ], RetrieveAPage200ApplicationJsonPropertiesSummaryText.prototype, "text", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], RetrieveAPage200ApplicationJsonPropertiesSummaryText.prototype, "type", void 0);
    return RetrieveAPage200ApplicationJsonPropertiesSummaryText;
}(utils_1.SpeakeasyBase));
exports.RetrieveAPage200ApplicationJsonPropertiesSummaryText = RetrieveAPage200ApplicationJsonPropertiesSummaryText;
var RetrieveAPage200ApplicationJsonPropertiesSummary = /** @class */ (function (_super) {
    __extends(RetrieveAPage200ApplicationJsonPropertiesSummary, _super);
    function RetrieveAPage200ApplicationJsonPropertiesSummary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], RetrieveAPage200ApplicationJsonPropertiesSummary.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=text", elemType: RetrieveAPage200ApplicationJsonPropertiesSummaryText }),
        __metadata("design:type", Array)
    ], RetrieveAPage200ApplicationJsonPropertiesSummary.prototype, "text", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], RetrieveAPage200ApplicationJsonPropertiesSummary.prototype, "type", void 0);
    return RetrieveAPage200ApplicationJsonPropertiesSummary;
}(utils_1.SpeakeasyBase));
exports.RetrieveAPage200ApplicationJsonPropertiesSummary = RetrieveAPage200ApplicationJsonPropertiesSummary;
var RetrieveAPage200ApplicationJsonPropertiesTypeSelect = /** @class */ (function (_super) {
    __extends(RetrieveAPage200ApplicationJsonPropertiesTypeSelect, _super);
    function RetrieveAPage200ApplicationJsonPropertiesTypeSelect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=color" }),
        __metadata("design:type", String)
    ], RetrieveAPage200ApplicationJsonPropertiesTypeSelect.prototype, "color", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], RetrieveAPage200ApplicationJsonPropertiesTypeSelect.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], RetrieveAPage200ApplicationJsonPropertiesTypeSelect.prototype, "name", void 0);
    return RetrieveAPage200ApplicationJsonPropertiesTypeSelect;
}(utils_1.SpeakeasyBase));
exports.RetrieveAPage200ApplicationJsonPropertiesTypeSelect = RetrieveAPage200ApplicationJsonPropertiesTypeSelect;
var RetrieveAPage200ApplicationJsonPropertiesType = /** @class */ (function (_super) {
    __extends(RetrieveAPage200ApplicationJsonPropertiesType, _super);
    function RetrieveAPage200ApplicationJsonPropertiesType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], RetrieveAPage200ApplicationJsonPropertiesType.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=select" }),
        __metadata("design:type", RetrieveAPage200ApplicationJsonPropertiesTypeSelect)
    ], RetrieveAPage200ApplicationJsonPropertiesType.prototype, "select", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], RetrieveAPage200ApplicationJsonPropertiesType.prototype, "type", void 0);
    return RetrieveAPage200ApplicationJsonPropertiesType;
}(utils_1.SpeakeasyBase));
exports.RetrieveAPage200ApplicationJsonPropertiesType = RetrieveAPage200ApplicationJsonPropertiesType;
var RetrieveAPage200ApplicationJsonProperties = /** @class */ (function (_super) {
    __extends(RetrieveAPage200ApplicationJsonProperties, _super);
    function RetrieveAPage200ApplicationJsonProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Author" }),
        __metadata("design:type", RetrieveAPage200ApplicationJsonPropertiesAuthor)
    ], RetrieveAPage200ApplicationJsonProperties.prototype, "author", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Link" }),
        __metadata("design:type", RetrieveAPage200ApplicationJsonPropertiesLink)
    ], RetrieveAPage200ApplicationJsonProperties.prototype, "link", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Name" }),
        __metadata("design:type", RetrieveAPage200ApplicationJsonPropertiesName)
    ], RetrieveAPage200ApplicationJsonProperties.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Publisher" }),
        __metadata("design:type", RetrieveAPage200ApplicationJsonPropertiesPublisher)
    ], RetrieveAPage200ApplicationJsonProperties.prototype, "publisher", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Publishing/Release Date" }),
        __metadata("design:type", RetrieveAPage200ApplicationJsonPropertiesPublishingReleaseDate)
    ], RetrieveAPage200ApplicationJsonProperties.prototype, "publishingReleaseDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Read" }),
        __metadata("design:type", RetrieveAPage200ApplicationJsonPropertiesRead)
    ], RetrieveAPage200ApplicationJsonProperties.prototype, "read", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Status" }),
        __metadata("design:type", RetrieveAPage200ApplicationJsonPropertiesStatus)
    ], RetrieveAPage200ApplicationJsonProperties.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Summary" }),
        __metadata("design:type", RetrieveAPage200ApplicationJsonPropertiesSummary)
    ], RetrieveAPage200ApplicationJsonProperties.prototype, "summary", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Type" }),
        __metadata("design:type", RetrieveAPage200ApplicationJsonPropertiesType)
    ], RetrieveAPage200ApplicationJsonProperties.prototype, "type", void 0);
    return RetrieveAPage200ApplicationJsonProperties;
}(utils_1.SpeakeasyBase));
exports.RetrieveAPage200ApplicationJsonProperties = RetrieveAPage200ApplicationJsonProperties;
var RetrieveAPage200ApplicationJson = /** @class */ (function (_super) {
    __extends(RetrieveAPage200ApplicationJson, _super);
    function RetrieveAPage200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=archived" }),
        __metadata("design:type", Boolean)
    ], RetrieveAPage200ApplicationJson.prototype, "archived", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_time" }),
        __metadata("design:type", String)
    ], RetrieveAPage200ApplicationJson.prototype, "createdTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], RetrieveAPage200ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last_edited_time" }),
        __metadata("design:type", String)
    ], RetrieveAPage200ApplicationJson.prototype, "lastEditedTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=object" }),
        __metadata("design:type", String)
    ], RetrieveAPage200ApplicationJson.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=parent" }),
        __metadata("design:type", RetrieveAPage200ApplicationJsonParent)
    ], RetrieveAPage200ApplicationJson.prototype, "parent", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=properties" }),
        __metadata("design:type", RetrieveAPage200ApplicationJsonProperties)
    ], RetrieveAPage200ApplicationJson.prototype, "properties", void 0);
    return RetrieveAPage200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.RetrieveAPage200ApplicationJson = RetrieveAPage200ApplicationJson;
var RetrieveAPageRequest = /** @class */ (function (_super) {
    __extends(RetrieveAPageRequest, _super);
    function RetrieveAPageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RetrieveAPagePathParams)
    ], RetrieveAPageRequest.prototype, "pathParams", void 0);
    return RetrieveAPageRequest;
}(utils_1.SpeakeasyBase));
exports.RetrieveAPageRequest = RetrieveAPageRequest;
var RetrieveAPageResponse = /** @class */ (function (_super) {
    __extends(RetrieveAPageResponse, _super);
    function RetrieveAPageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], RetrieveAPageResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], RetrieveAPageResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], RetrieveAPageResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RetrieveAPage200ApplicationJson)
    ], RetrieveAPageResponse.prototype, "retrieveAPage200ApplicationJSONObject", void 0);
    return RetrieveAPageResponse;
}(utils_1.SpeakeasyBase));
exports.RetrieveAPageResponse = RetrieveAPageResponse;
