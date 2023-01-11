package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGenesByAliasSymbolUsingGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=aliasSymbol")
    public String aliasSymbol;
    public GetGenesByAliasSymbolUsingGetPathParams withAliasSymbol(String aliasSymbol) {
        this.aliasSymbol = aliasSymbol;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=speciesTypeKey")
    public Integer speciesTypeKey;
    public GetGenesByAliasSymbolUsingGetPathParams withSpeciesTypeKey(Integer speciesTypeKey) {
        this.speciesTypeKey = speciesTypeKey;
        return this;
    }
}