/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import java.time.OffsetDateTime;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class GetSpotsRequest {
    /**
     * Limits on `time_created`, Marks the start of a range, optionally use `before` to set the end. Result output excludes the given timestamp.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=after")
    public OffsetDateTime after;
    public GetSpotsRequest withAfter(OffsetDateTime after) {
        this.after = after;
        return this;
    }
    
    /**
     * Limits directly on `id`. Marks the start of a range, optionally use `before_id` to set the end. Result output excludes the given `id` value. Please note that `id` is in chronological order.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=after_id")
    public String afterId;
    public GetSpotsRequest withAfterId(String afterId) {
        this.afterId = afterId;
        return this;
    }
    
    /**
     * Limits on `time_created`. Marks the end of a range, optionally use `after` to set the start. Result output excludes the given timestamp.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=before")
    public String before;
    public GetSpotsRequest withBefore(String before) {
        this.before = before;
        return this;
    }
    
    /**
     * Limits directly on `id`. Marks the end of a range, optionally use `after_id` to set the start. Result output excludes the given `id` value. Please note that `id` is in chronological order.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=before_id")
    public String beforeId;
    public GetSpotsRequest withBeforeId(String beforeId) {
        this.beforeId = beforeId;
        return this;
    }
    
    /**
     * Limits on `time_created`. Marks the start of a range, optionally use `until` to set the end. Result output includes the given timestamp.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=from")
    public String from;
    public GetSpotsRequest withFrom(String from) {
        this.from = from;
        return this;
    }
    
    /**
     * Limits on `id`. Marks the start of a range, optionally use `until_id` to set the end. Result output includes the given `id` value. Please note that `id` is in chronological order.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=from_id")
    public String fromId;
    public GetSpotsRequest withFromId(String fromId) {
        this.fromId = fromId;
        return this;
    }
    
    /**
     * Unique identifier
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=id")
    public String id;
    public GetSpotsRequest withId(String id) {
        this.id = id;
        return this;
    }
    
    /**
     * Removes `url` fields from output and shows `_id` instead of `_url` in references.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=id_only")
    public Boolean idOnly;
    public GetSpotsRequest withIdOnly(Boolean idOnly) {
        this.idOnly = idOnly;
        return this;
    }
    
    /**
     * Filter based on the online status.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=is_online")
    public Boolean isOnline;
    public GetSpotsRequest withIsOnline(Boolean isOnline) {
        this.isOnline = isOnline;
        return this;
    }
    
    /**
     * Sets the maximum number of returned resources. You may increase this number to large values, keep in mind that query times could become large. We advise you to use the pagination feature whenever you can.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public GetSpotsRequest withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    
    /**
     * Expand a reference into the actual resource (lookup). You may add multiple fields by giving a comma separated value.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=populate")
    public String populate;
    public GetSpotsRequest withPopulate(String populate) {
        this.populate = populate;
        return this;
    }
    
    /**
     * Filter based on the amount of request made
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=request_counter")
    public Long requestCounter;
    public GetSpotsRequest withRequestCounter(Long requestCounter) {
        this.requestCounter = requestCounter;
        return this;
    }
    
    /**
     * Removes response envelope with information about query, only sends back a JSON array with the applicable resources.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=results_only")
    public Boolean resultsOnly;
    public GetSpotsRequest withResultsOnly(Boolean resultsOnly) {
        this.resultsOnly = resultsOnly;
        return this;
    }
    
    /**
     * Select which properties should be returned. You may add multiple fields by giving a comma separated value. Select can also be used together with populate: Specify the resource first, then a period(.) followed by the field.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=select")
    public String select;
    public GetSpotsRequest withSelect(String select) {
        this.select = select;
        return this;
    }
    
    /**
     * Filter based on the serial number.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=serial_number")
    public Long serialNumber;
    public GetSpotsRequest withSerialNumber(Long serialNumber) {
        this.serialNumber = serialNumber;
        return this;
    }
    
    /**
     * Allows you to sort on on or more fields in the resource. You may append a minus sign (`-`) to request reverse order (new to old).
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String sort;
    public GetSpotsRequest withSort(String sort) {
        this.sort = sort;
        return this;
    }
    
    /**
     * Filter on the time the resource was created.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=time_created")
    public String timeCreated;
    public GetSpotsRequest withTimeCreated(String timeCreated) {
        this.timeCreated = timeCreated;
        return this;
    }
    
    /**
     * Filter on the time the resource was last updated
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=time_updated")
    public String timeUpdated;
    public GetSpotsRequest withTimeUpdated(String timeUpdated) {
        this.timeUpdated = timeUpdated;
        return this;
    }
    
    /**
     * Overrides the default query timeout (in seconds). A value of 0 means unlimited. IMPORTANT: using high timeouts in production code is strongly discouraged as it may lead to stability issues.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=timeout_s")
    public Double timeoutS;
    public GetSpotsRequest withTimeoutS(Double timeoutS) {
        this.timeoutS = timeoutS;
        return this;
    }
    
    /**
     * Limits on `time_created`. Marks the end of a range, optionally use `from` to set the start. Result output includes the given timestamp.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=until")
    public String until;
    public GetSpotsRequest withUntil(String until) {
        this.until = until;
        return this;
    }
    
    /**
     * Limits on `id`. Marks the end of a range, optionally use `from_id` to set the start. Result output includes the given `id` value. Please note that `id` is in chronological order.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=until_id")
    public String untilId;
    public GetSpotsRequest withUntilId(String untilId) {
        this.untilId = untilId;
        return this;
    }
    
}
