package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListPendingNodesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=composition")
    public openapisdk.models.shared.NodeCompositionEnum composition;
    public ListPendingNodesQueryParams withComposition(openapisdk.models.shared.NodeCompositionEnum composition) {
        this.composition = composition;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include")
    public String include;
    public ListPendingNodesQueryParams withInclude(String include) {
        this.include = include;
        return this;
    }
    @SpeakeasyMetadata("queryParam:serialization=json,name=query")
    public openapisdk.models.shared.NodeQuery query;
    public ListPendingNodesQueryParams withQuery(openapisdk.models.shared.NodeQuery query) {
        this.query = query;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=select")
    public String select;
    public ListPendingNodesQueryParams withSelect(String select) {
        this.select = select;
        return this;
    }
    @SpeakeasyMetadata("queryParam:serialization=json,name=where")
    public openapisdk.models.shared.NodeWhere[] where;
    public ListPendingNodesQueryParams withWhere(openapisdk.models.shared.NodeWhere[] where) {
        this.where = where;
        return this;
    }
}