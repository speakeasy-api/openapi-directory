package openapisdk.models.shared;



public class Chromosome {
    public String chromosome;
    public Chromosome withChromosome(String chromosome) {
        this.chromosome = chromosome;
        return this;
    }
    public Integer contigCount;
    public Chromosome withContigCount(Integer contigCount) {
        this.contigCount = contigCount;
        return this;
    }
    public Integer gapCount;
    public Chromosome withGapCount(Integer gapCount) {
        this.gapCount = gapCount;
        return this;
    }
    public Integer gapLength;
    public Chromosome withGapLength(Integer gapLength) {
        this.gapLength = gapLength;
        return this;
    }
    public String genbankId;
    public Chromosome withGenbankId(String genbankId) {
        this.genbankId = genbankId;
        return this;
    }
    public Integer mapKey;
    public Chromosome withMapKey(Integer mapKey) {
        this.mapKey = mapKey;
        return this;
    }
    public Integer ordinalNumber;
    public Chromosome withOrdinalNumber(Integer ordinalNumber) {
        this.ordinalNumber = ordinalNumber;
        return this;
    }
    public String refseqId;
    public Chromosome withRefseqId(String refseqId) {
        this.refseqId = refseqId;
        return this;
    }
    public Integer seqLength;
    public Chromosome withSeqLength(Integer seqLength) {
        this.seqLength = seqLength;
        return this;
    }
}