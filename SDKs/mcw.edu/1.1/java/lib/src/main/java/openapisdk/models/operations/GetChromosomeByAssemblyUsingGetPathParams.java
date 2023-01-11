package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetChromosomeByAssemblyUsingGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=chromosome")
    public String chromosome;
    public GetChromosomeByAssemblyUsingGetPathParams withChromosome(String chromosome) {
        this.chromosome = chromosome;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=mapKey")
    public Integer mapKey;
    public GetChromosomeByAssemblyUsingGetPathParams withMapKey(Integer mapKey) {
        this.mapKey = mapKey;
        return this;
    }
}