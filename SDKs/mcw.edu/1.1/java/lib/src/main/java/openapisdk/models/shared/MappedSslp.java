package openapisdk.models.shared;



public class MappedSslp {
    public String chromosome;
    public MappedSslp withChromosome(String chromosome) {
        this.chromosome = chromosome;
        return this;
    }
    public Integer mapKey;
    public MappedSslp withMapKey(Integer mapKey) {
        this.mapKey = mapKey;
        return this;
    }
    public Sslp sslp;
    public MappedSslp withSslp(Sslp sslp) {
        this.sslp = sslp;
        return this;
    }
    public Long start;
    public MappedSslp withStart(Long start) {
        this.start = start;
        return this;
    }
    public Long stop;
    public MappedSslp withStop(Long stop) {
        this.stop = stop;
        return this;
    }
    public String strand;
    public MappedSslp withStrand(String strand) {
        this.strand = strand;
        return this;
    }
}