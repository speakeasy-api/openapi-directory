package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class GetItemsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=after")
    public OffsetDateTime after;
    public GetItemsQueryParams withAfter(OffsetDateTime after) {
        this.after = after;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=after_code")
    public String afterCode;
    public GetItemsQueryParams withAfterCode(String afterCode) {
        this.afterCode = afterCode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=after_id")
    public String afterId;
    public GetItemsQueryParams withAfterId(String afterId) {
        this.afterId = afterId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=before")
    public String before;
    public GetItemsQueryParams withBefore(String before) {
        this.before = before;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=before_code")
    public String beforeCode;
    public GetItemsQueryParams withBeforeCode(String beforeCode) {
        this.beforeCode = beforeCode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=before_id")
    public String beforeId;
    public GetItemsQueryParams withBeforeId(String beforeId) {
        this.beforeId = beforeId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=code_hex")
    public String codeHex;
    public GetItemsQueryParams withCodeHex(String codeHex) {
        this.codeHex = codeHex;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=from")
    public String from;
    public GetItemsQueryParams withFrom(String from) {
        this.from = from;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=from_code")
    public String fromCode;
    public GetItemsQueryParams withFromCode(String fromCode) {
        this.fromCode = fromCode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=from_id")
    public String fromId;
    public GetItemsQueryParams withFromId(String fromId) {
        this.fromId = fromId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=id")
    public String id;
    public GetItemsQueryParams withId(String id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=id_only")
    public Boolean idOnly;
    public GetItemsQueryParams withIdOnly(Boolean idOnly) {
        this.idOnly = idOnly;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=is_present")
    public Boolean isPresent;
    public GetItemsQueryParams withIsPresent(Boolean isPresent) {
        this.isPresent = isPresent;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=label")
    public String label;
    public GetItemsQueryParams withLabel(String label) {
        this.label = label;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public GetItemsQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=location")
    public String location;
    public GetItemsQueryParams withLocation(String location) {
        this.location = location;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=metadata")
    public String metadata;
    public GetItemsQueryParams withMetadata(String metadata) {
        this.metadata = metadata;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=move_count")
    public Long moveCount;
    public GetItemsQueryParams withMoveCount(Long moveCount) {
        this.moveCount = moveCount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=populate")
    public String populate;
    public GetItemsQueryParams withPopulate(String populate) {
        this.populate = populate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=protocol")
    public openapisdk.models.shared.ItemProtocolEnum protocol;
    public GetItemsQueryParams withProtocol(openapisdk.models.shared.ItemProtocolEnum protocol) {
        this.protocol = protocol;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=results_only")
    public Boolean resultsOnly;
    public GetItemsQueryParams withResultsOnly(Boolean resultsOnly) {
        this.resultsOnly = resultsOnly;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=select")
    public String select;
    public GetItemsQueryParams withSelect(String select) {
        this.select = select;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sets")
    public String sets;
    public GetItemsQueryParams withSets(String sets) {
        this.sets = sets;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String sort;
    public GetItemsQueryParams withSort(String sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=technology")
    public openapisdk.models.shared.TechnologyEnum technology;
    public GetItemsQueryParams withTechnology(openapisdk.models.shared.TechnologyEnum technology) {
        this.technology = technology;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=text")
    public String text;
    public GetItemsQueryParams withText(String text) {
        this.text = text;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=time_created")
    public String timeCreated;
    public GetItemsQueryParams withTimeCreated(String timeCreated) {
        this.timeCreated = timeCreated;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=time_last_present")
    public String timeLastPresent;
    public GetItemsQueryParams withTimeLastPresent(String timeLastPresent) {
        this.timeLastPresent = timeLastPresent;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=time_moved")
    public String timeMoved;
    public GetItemsQueryParams withTimeMoved(String timeMoved) {
        this.timeMoved = timeMoved;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=time_updated")
    public String timeUpdated;
    public GetItemsQueryParams withTimeUpdated(String timeUpdated) {
        this.timeUpdated = timeUpdated;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=timeout_s")
    public Double timeoutS;
    public GetItemsQueryParams withTimeoutS(Double timeoutS) {
        this.timeoutS = timeoutS;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public openapisdk.models.shared.ItemTypeEnum type;
    public GetItemsQueryParams withType(openapisdk.models.shared.ItemTypeEnum type) {
        this.type = type;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=until")
    public String until;
    public GetItemsQueryParams withUntil(String until) {
        this.until = until;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=until_code")
    public String untilCode;
    public GetItemsQueryParams withUntilCode(String untilCode) {
        this.untilCode = untilCode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=until_id")
    public String untilId;
    public GetItemsQueryParams withUntilId(String untilId) {
        this.untilId = untilId;
        return this;
    }
}