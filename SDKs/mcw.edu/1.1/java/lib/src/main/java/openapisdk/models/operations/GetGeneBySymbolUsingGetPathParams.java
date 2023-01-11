package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGeneBySymbolUsingGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=speciesTypeKey")
    public Integer speciesTypeKey;
    public GetGeneBySymbolUsingGetPathParams withSpeciesTypeKey(Integer speciesTypeKey) {
        this.speciesTypeKey = speciesTypeKey;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=symbol")
    public String symbol;
    public GetGeneBySymbolUsingGetPathParams withSymbol(String symbol) {
        this.symbol = symbol;
        return this;
    }
}