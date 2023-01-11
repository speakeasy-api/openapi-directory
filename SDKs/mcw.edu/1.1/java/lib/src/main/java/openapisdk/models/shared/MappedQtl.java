package openapisdk.models.shared;



public class MappedQtl {
    public String chromosome;
    public MappedQtl withChromosome(String chromosome) {
        this.chromosome = chromosome;
        return this;
    }
    public Integer mapKey;
    public MappedQtl withMapKey(Integer mapKey) {
        this.mapKey = mapKey;
        return this;
    }
    public Qtl qtl;
    public MappedQtl withQtl(Qtl qtl) {
        this.qtl = qtl;
        return this;
    }
    public Long start;
    public MappedQtl withStart(Long start) {
        this.start = start;
        return this;
    }
    public Long stop;
    public MappedQtl withStop(Long stop) {
        this.stop = stop;
        return this;
    }
    public String strand;
    public MappedQtl withStrand(String strand) {
        this.strand = strand;
        return this;
    }
}